import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  try {
    const blogs = await prisma.blogs.findMany({
        select:{
            id:true,
            image:true,
            title:true
        }
    });
    return new Response(JSON.stringify(blogs), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 501 });
  }finally{
    await prisma.$disconnect()
  }
}

export async function POST(req){
  const{image,title,content}=await req.json();
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRE,
  });
  try {
      await prisma.blogs.create({
          data:{
              author:token.name,
              image,
              title,
              content
          }
      })
      return new Response('success',{status:201})
  } catch (error) {
      console.log(error);
      return new Response('failed',{status:501})
  }finally{
      await prisma.$disconnect()
  }
}