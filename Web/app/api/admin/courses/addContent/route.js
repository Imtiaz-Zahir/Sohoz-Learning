import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req){
    const {orderOn, coursesId, title, lessons} = await req.json();
    await prisma.couresContent.create({
        data:{
            orderOn,
            coursesId,
            title,
            lessons:{
                createMany:{
                    data:lessons
                }
            }
        }
    })
    return new Response(JSON.stringify({message:"success"}))
}