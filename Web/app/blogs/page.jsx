"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { UilUser, UilCalendarAlt, UilEye, UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons'

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch("/api/blogs",{
        method: "POST",
        body: JSON.stringify({
          take:5,
          skip:0
        }),
      });
      setBlogs(await data.json());
    };
    fetchBlogs();
  }, []);

  return (
    <div className="lg:w-2/3">
      {blogs.map((data,index) => (
        <div key={index} className="mb-10">
          <Image
            className="w-full rounded-xl"
            height={370}
            width={750}
            src={`/blog/${data.image}`}
            alt={data.title}
          />
          <div className="md:flex my-6 font-semibold">
            <div className="flex flex-wrap gap-4">
              <p className="flex items-center gap-1 whitespace-nowrap">
                <UilUser size="17" className="text-orange-500" />
                {data.author}
              </p>
              <p className="flex items-center gap-1 whitespace-nowrap">
                <UilCalendarAlt size="17" className="text-orange-500" />
                {data.createdAt.slice(0, 10)}
              </p>
              <p className="flex items-center gap-1 whitespace-nowrap">
                <UilEye size="17" className="text-orange-500" />
                {data.views}
              </p>
            </div>
          </div>
          <Link
            href={`/blogs/${data.id}`}
            className="text-3xl font-bold hover:text-orange-500"
          >
            {data.title}
          </Link>
          <p className="my-6 text-slate-500">
            {data.content.slice(0, 400).concat("....")}
          </p>
          <Link
            href={`/blogs/${data.id}`}
            className="uppercase transition-all py-4 px-8 bg-orange-600 hover:bg-blue-900 text-white font-bold rounded-md"
          >
            read more
          </Link>
        </div>
      ))}
      {/* <div className="mb-10 animate-pulse -z-20 relative">
        <div className="w-full h-96 bg-slate-200 rounded-xl"></div>

      </div> */}
    </div>
  );
}
