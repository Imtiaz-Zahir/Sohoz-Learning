import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getToken } from "next-auth/jwt";

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
