import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req){
    const{usersId,coursesId}=await req.json();
    try {
        await prisma.enrollments.create({
            data:{
                usersId,
                coursesId
            }
        })
        return new Response(JSON.stringify({msg:'success'}),{status:201})
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({msg:'failed'}),{status:501})
    }finally{
        await prisma.$disconnect()
    }
}