import React from 'react'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import { UilUser, UilCalendarAlt, UilEye } from '@iconscout/react-unicons'
import parse from "html-react-parser";

export default async function Page({ params }) {
    const prisma = new PrismaClient()
    const blog=await prisma.blogs.findFirst({
        where:{id:params.blogId}
    })
    await prisma.$disconnect();
    
    return (
        <div className="lg:w-2/3">
            <Image className="w-full rounded-xl" priority={true} height={370} width={750} src={`/blog/${blog.image}`} alt={blog.title} />
            <div className="md:flex my-6 font-semibold">
                <div className="flex flex-wrap gap-4">
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilUser size="17" className="text-orange-500" />{blog.author}</p>
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilCalendarAlt size="17" className="text-orange-500" />{blog.createdAt.toString().slice(4,15)}</p>
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilEye size="17" className="text-orange-500" />{blog.views}</p>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="my-6 text-slate-500">{parse(blog.content)}</p>
        </div>
    )
}
