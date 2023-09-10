import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const courses = await prisma.courses.findMany({
        select:{
            id:true,
            image:true,
            title:true
        }
    });
    return new Response(JSON.stringify(courses), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 501 });
  }finally{
    await prisma.$disconnect()
  }
}

export async function POST(req){
    const{price,image,title,about,lavel,learningPoient,video}=await req.json();
    try {
        await prisma.courses.create({
            data:{
                price,
                image,
                title,
                video,
                about,
                lavel,
                learningPoient:{
                    createMany:{
                        data:learningPoient
                    }
                }
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
