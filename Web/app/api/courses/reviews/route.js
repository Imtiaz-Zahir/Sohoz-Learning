import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req){
    const{rating,comment,usersId,coursesId,enrollmentsId}=await req.json();
    try {
        await prisma.reviews.create({
            data:{
                rating,
                comment,
                usersId,
                coursesId,
                enrollmentsId
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