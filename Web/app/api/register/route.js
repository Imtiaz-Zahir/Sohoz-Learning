import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { SHA256 } from "crypto-js";

export async function POST(req) {
  const { name, email, pass, password_confirm } = await req.json();
  if(!name && !email && !pass && !password_confirm){
    return new Response(JSON.stringify({ mass: "fillup all field" }), {
      status: 501,
    });
  }else if(!email.includes("@") || !email.includes(".")){
    return new Response(
        JSON.stringify({ mass: "email is not valid" }),
        { status: 501 }
      );
  }else if(await prisma.users.findFirst({ where: { email } })){
    return new Response(
        JSON.stringify({ mass: "alrady ragister" }),
        { status: 501 }
      );
  }else if(pass.length < 8){
    return new Response(
          JSON.stringify(
            { mass: "password must be more then 8 character" },
            { status: 501 }
          )
        );
  }else if(pass !== password_confirm){
    return new Response(
        JSON.stringify({ mass: "passworn and confirm are not match" }),
        { status: 501 }
      );
  }else if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pass))){
    return new Response(
        JSON.stringify({ mass: "password should contain at least one numeric digit, one uppercase and one lowercase letter" }),
        { status: 501 }
      );
  }else{
    try {
      await prisma.users.create({
        data: {
          name,
          email,
          password: await SHA256(pass).toString(),
        },
      });
      return new Response(JSON.stringify({ mass: "success" }), {
        status: 201,
      });
    } catch (error) {
      console.log(error);
      return new Response(
        JSON.stringify({ mass: "internal server error" }),
        { status: 501 }
      );
    } finally {
      await prisma.$disconnect();
    }
  }
}
