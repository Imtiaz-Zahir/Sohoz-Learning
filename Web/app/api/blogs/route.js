import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req){
    const{take,skip}=await req.json();
    try {
        const res=await prisma.blogs.findMany({take,skip})
        return new Response(JSON.stringify(res),{status:201})
    } catch (error) {
        console.log(error);
        return new Response('failed',{status:501})
    }finally{
        await prisma.$disconnect()
    }
}
