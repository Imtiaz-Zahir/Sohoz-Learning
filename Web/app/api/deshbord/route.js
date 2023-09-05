import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRE,
  });
  if (token && token.exp > Date.now() / 1000) {
    try {
      const data=await prisma.enrollments.findMany({
          where:{
            usersId:token.sub
          },
          select:{
            coures:{
                select:{
                    id:true,
                    image:true,
                    title:true,
                }
            }
          }
      })
      return new Response(JSON.stringify(data),{status:200})
    } catch (error) {
      console.log(error);
      return new Response("failed", { status: 501 });
    } finally {
      await prisma.$disconnect();
    }
  }else{
    return new Response("not a user", { status: 501 });
  }
}
