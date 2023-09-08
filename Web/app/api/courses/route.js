import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req){
    // const{author,image,title,content}=await req.json();
    try {
        const res=await prisma.courses.findMany({
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
    const{price,image,title,about,lavel,learningPoient}=await req.json();
    try {
        await prisma.courses.create({
            data:{
                price,
                image,
                title,
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