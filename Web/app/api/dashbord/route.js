import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getToken } from "next-auth/jwt";
import { SHA256 } from "crypto-js";

export async function GET(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRE,
  });
  if (token && token.exp > Date.now() / 1000) {
    try {
      const data = await prisma.enrollments.findMany({
        where: {
          usersId: token.sub,
        },
        select: {
          coures: {
            select: {
              id: true,
              image: true,
              title: true,
              couresContent: {
                select: {
                  lessons: {
                    select: { id: true },
                  },
                },
              },
            },
          },
        },
      });

      const res = data.reduce((acc, crr) => {
        const length = crr.coures.couresContent.reduce((acc, crr) => {
          return acc + crr.lessons.length;
        }, 0);
        return [
          ...acc,
          {
            id: crr.coures.id,
            image: crr.coures.image,
            title: crr.coures.title,
            lessons: length,
          },
        ];
      }, []);

      return new Response(JSON.stringify(res), { status: 201 });
    } catch (error) {
      console.log(error);
      return new Response("failed", { status: 501 });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return new Response("not a user", { status: 501 });
  }
}

export async function POST(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRE,
  });
  if (token && token.exp > Date.now() / 1000) {
    const { prvPass, newPass, conNewPass } = await req.json();
    if(newPass.length < 8){
      return new Response(
            JSON.stringify(
              { mass: "password must be more then 8 character" },
              { status: 501 }
            )
          );
    }
    if (newPass !== conNewPass) {
      return new Response(
        JSON.stringify({
          msg: "New Password and Confirm Password are not matched",
        }),
        { status: 501 }
      );
    }
    if (prvPass !== conNewPass) {
      return new Response(
        JSON.stringify({
          msg: "Use new Password",
        }),
        { status: 501 }
      );
    }
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(newPass))){
      return new Response(
          JSON.stringify({ msg: "password should contain at least one numeric digit, one uppercase and one lowercase letter" }),
          { status: 501 }
        );
    }
    try {
      const ismetch = await prisma.users.findFirst({
        where: {
          id: token.sub,
          password: await SHA256(prvPass).toString(),
        },
      });

      if (ismetch) {
        await prisma.users.update({
          where: {
            id: token.sub,
          },
          data: {
            password: await SHA256(newPass).toString(),
          },
        });
        return new Response(
          JSON.stringify({ msg: "Password Changed Successfully" }),
          { status: 201 }
        );
      } else {
        return new Response(
          JSON.stringify({ msg: "Old Password is not matched" }),
          { status: 501 }
        );
      }
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({ msg: "Try again latter" }), { status: 501 });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return new Response("not a user", { status: 501 });
  }
}
