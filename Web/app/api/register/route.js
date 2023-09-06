import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { SHA256 } from "crypto-js";

export async function POST(req) {
  const { name, email, pass, password_confirm } = await req.json();
  if (name && email && pass && password_confirm) {
    if (pass === password_confirm) {
      if (pass.length >= 8) {
        if (!(await prisma.users.findFirst({ where: { email } }))) {
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
        } else {
          return new Response(
            JSON.stringify({ mass: "alrady ragister" }, { status: 501 })
          );
        }
      } else {
        return new Response(
          JSON.stringify(
            { mass: "password must be more then 8 character" },
            { status: 501 }
          )
        );
      }
    } else {
      return new Response(
        JSON.stringify({ mass: "passworn and confirm are not match" }),
        { status: 501 }
      );
    }
  } else {
    return new Response(JSON.stringify({ mass: "fillup all field" }), {
      status: 501,
    });
  }
}
