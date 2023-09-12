import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  const { skip } = await req.json();
  try {
    const res = await prisma.blogs.findMany({
      take: 5,
      skip,
      orderBy: { id: "desc" },
    });
    return new Response(JSON.stringify(res), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 501 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req) {
  // const ip = await req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || req.headers.get('x-real-ip') || req.headers.get('x-true-ip') || req.headers.get('x-ip') || req.headers.get('x-proxy-user-ip') || req.headers.get('x-remote-ip') || req.headers.get('x-client-ip') || req.headers.get('x-user-ip') || req.headers.get('x-original-forwarded-for') || req.headers.get('x-originating-ip') || req.headers.get('x-remote-addr') || req.headers.get('x-remote-address') || req.headers.get('x-visitor-client-ip');
  const ip = await req.headers.get("x-forwarded-for");
  const { blogsId } = await req.json();

  try {
    const isViewed = await prisma.viewed.findFirst({
      where: {
        ip,
        blogsId,
      },
    });
    if (isViewed) {
      await prisma.viewed.update({
        where: {
          id: isViewed.id,
        },
        data: {
          viewed: isViewed.viewed + 1,
        },
      });
    } else {
      await prisma.blogs.update({
        where: {
          id: blogsId,
        },
        data: {
          views: {
            increment: 1,
          },
        },
      });
      await prisma.viewed.create({
        data: {
          ip,
          blogsId,
        },
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
