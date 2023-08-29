import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UilUser, UilCalendarAlt, UilTagAlt } from '@iconscout/react-unicons'

export default function BlogPreview({ data ,index }) {
    return (
        <div key={index} className="mb-10">
            <Image className="w-full rounded-xl" priority={index===0} height={370} width={750} src={`/blog/${data.imgurlki}`} alt={data.titletaki} />
            <div className="md:flex my-6 font-semibold">
                <div className="flex flex-wrap gap-4">
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilUser size="17" className="text-orange-500" />{data.kpostkorche}</p>
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilCalendarAlt size="17" className="text-orange-500" />{data.date}</p>
                    <p className='flex items-center gap-1 whitespace-nowrap'><UilTagAlt size="17" className="text-orange-500" />{data.cat}</p>
                </div>
            </div>
            <Link href={`/blogs/${data.posotid}`} className="text-3xl font-bold hover:text-orange-500">{data.titletaki}</Link>
            <p className="my-6 text-slate-500">{data.bistarito.slice(0, 400).concat("....")}</p>
            <Link href={`/blogs/${data.posotid}`} className="uppercase transition-all py-4 px-8 bg-orange-600 hover:bg-blue-900 text-white font-bold rounded-md">read more</Link>
        </div>
    )
}
