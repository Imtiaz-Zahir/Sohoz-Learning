import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req){
    const{name,email,sub,comment}=await req.json();
    if(!name || !email || !sub || !comment){
        return new Response(JSON.stringify({msg:'fill up all fuild'}),{status:501})
    }
    try {
        await prisma.contacts.create({
            data:{
                name,
                email ,
                subject:sub,
                message:comment
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