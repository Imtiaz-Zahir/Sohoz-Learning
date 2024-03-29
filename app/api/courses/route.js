import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req){
    // const{author,image,title,content}=await req.json();
    try {
        const res=await prisma.courses.findMany({
            take:6,
            skip:0,
        })
        return new Response(JSON.stringify(res),{status:201})
    } catch (error) {
        console.log(error);
        return new Response('failed',{status:501})
    }finally{
        await prisma.$disconnect()
    }
}
