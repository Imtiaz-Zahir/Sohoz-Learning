"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default async function blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async function () {
      await fetch("/api/admin/blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    })();
  }, []);

  return (
    <div className="lg:p-6 lg:w-[80%] border-t border-slate-300">
      <Link
        href={`/admin/addBlog`}
        className="bg-orange-500 rounded-lg text-lg font-semibold mt-4 py-2 flex items-center justify-center text-white"
      >
        Add Blog
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {blogs.map((data) => (
          <div
            key={data.id}
            className="p-4 bg-cyan-50 rounded-xl max-w-[350px] mx-auto my-5"
          >
            <Image
              className="w-full rounded-xl"
              src={`/blog/${data.image}`}
              alt={data.title}
              height={300}
              width={350}
            />
            <div className="px-4 mt-4">
              <p className="text-2xl hover:text-orange-500 transition-all font-bold text-center">
                {data.title}
              </p>
              <Link
                href={`/admin/${data.id}`}
                className="border border-orange-500 rounded-lg text-lg font-semibold mt-4 flex items-center justify-center text-orange-500 py-2 hover:bg-orange-500 hover:text-white"
              >
                Edit Blog
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
