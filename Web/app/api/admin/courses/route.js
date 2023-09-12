import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs";
import { join } from "path";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const courses = await prisma.courses.findMany({
      select: {
        id: true,
        image: true,
        title: true,
      },
    });
    return new Response(JSON.stringify(courses), { status: 201 });
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

    let learningPoient = [];
    for (let index = 1; index < 7; index++) {
      learningPoient.push({point:data.get(`learningPoient${index}`)});
    }

    const image = data.get("image");
    const imageName = new Date().getTime() + image.name;
    const path = join(process.cwd(), "public/course/");
    await writeFile(path+imageName, Buffer.from(await image.arrayBuffer()) ,err=>{err && console.log(err); throw err});

    await prisma.courses.create({
      data: {
        price: parseInt(data.get("price")),
        image: imageName,
        title: data.get("title"),
        video: data.get("video"),
        about: data.get("about"),
        lavel: data.get("lavel"),
        learningPoient: {
          createMany: {
            data: learningPoient,
          },
        },
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
