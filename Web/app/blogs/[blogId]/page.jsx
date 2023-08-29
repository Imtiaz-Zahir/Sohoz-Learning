import React from 'react'
import Image from 'next/image'
import { UilUser, UilCalendarAlt, UilTagAlt } from '@iconscout/react-unicons'

export default async function Page({ params }) {
    const data = await fetch(`http://localhost/oursite/apis/single-blog.php?postid=${params.blogId}`);
    const blog = await data.json();
    return (
        <div className="lg:w-2/3">
            <Image className="w-full rounded-xl" priority={true} height={370} width={750} src={`/blog/${blog.imgurlki}`} alt={blog.titletaki} />
            <div className="md:flex my-6 font-semibold">
                <div className="flex flex-wrap gap-4">
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilUser size="17" className="text-orange-500" />{blog.kpostkorche}</p>
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilCalendarAlt size="17" className="text-orange-500" />{blog.date}</p>
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilTagAlt size="17" className="text-orange-500" />{blog.cat}</p>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{blog.titletaki}</h1>
            <p className="my-6 text-slate-500">{blog.bistarito}</p>
        </div>
    )
}
