import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { writeFile } from "fs";
import { join } from "path";
import { getToken } from "next-auth/jwt";
import { Buffer } from "buffer";

export async function GET(req) {
  try {
    const blogs = await prisma.blogs.findMany({
      select: {
        id: true,
        image: true,
        title: true,
      },
    });
    return new Response(JSON.stringify(blogs), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 501 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const token = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRE,
    });

    const image = data.get("image");
    const imageName = new Date().getTime() + image.name;
    const path = join(process.cwd(), "public/blog/");
    await writeFile(
      path + imageName,
      Buffer.from(await image.arrayBuffer()),
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      }
    );

    await prisma.blogs.create({
      data: {
        author: token.name,
        image: imageName,
        title: data.get("title"),
        content: data.get("content"),
      },
    });
    return new Response("success", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 501 });
  } finally {
    await prisma.$disconnect();
  }
}
