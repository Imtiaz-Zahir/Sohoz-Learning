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

//POST Example
// {
//     "price":5000,
//     "image":"course-9.jpg",
//     "title":"Java for noone",
//     "about":"nothing to say",
//     "lavel":"beganer",
//     "learningPoient":[
//         {"point":"somthing1"},
//         {"point":"somthing2"},
//         {"point":"somthing3"},
//         {"point":"somthing4"},
//         {"point":"somthing5"},
//         {"point":"somthing6"}
//     ]
// }

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