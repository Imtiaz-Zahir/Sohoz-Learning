import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
const prisma = new PrismaClient();

export async function POST(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRE,
  });
  if (token && token.exp > Date.now() / 1000) {
    const { CourseId }=await req.json();
    try {
        const data= await prisma.enrollments.findFirst(
            {
                where:{
                    usersId:token.sub,
                    coursesId:CourseId
                },
            }
        )
        if(!data){
            return new Response (JSON.stringify({msg:"Enroll First"}),{status:501})
        }else{
            const res= await prisma.courses.findFirst({
            where:{
                id:CourseId,
            },
            select:{
                title:true,
                image:true,
                couresContent:{
                    orderBy:{
                        orderOn:"asc"
                    },
                    select:{
                        id:true,
                        title:true,
                        lessons:{
                            orderBy:{
                                orderOn:"asc"
                            },
                            select:{
                                id:true,
                                title:true,
                                video:true,
                                duration:true,
                            }
                        }
                    }
                }
            }
        })
        return new Response(JSON.stringify(res),{status:201})
        }
        

    } catch (error) {
      console.log(error);
      return new Response("failed", { status: 501 });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return new Response("not a user", { status: 501 });
  }
}
