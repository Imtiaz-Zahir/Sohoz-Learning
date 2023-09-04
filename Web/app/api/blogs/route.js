import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req){
    // const{author,image,title,content}=await req.json();
    try {
        const res=await prisma.blogs.findMany({
            take:5,
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

export async function POST(req){
    const{author,image,title,content}=await req.json();
    try {
        const res=await prisma.blogs.create({
            data:{
                author,
                image,
                title,
                content
            }
        })
        return new Response(JSON.stringify(res),{status:201})
    } catch (error) {
        console.log(error);
        return new Response('failed',{status:501})
    }finally{
        await prisma.$disconnect()
    }
}

export async function PUT(req){
    const {id}=await req.json();
    try {
        await prisma.blogs.update({
            where:{
                id,
            },data:{
                views:views+1
            }
        })
    } catch (error) {
        console.log(error);
        return new Response('failed',{status:501})
    }finally{
        await prisma.$disconnect()
    }
}