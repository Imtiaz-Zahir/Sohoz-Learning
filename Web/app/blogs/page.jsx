'use client'
import React, { useEffect, useState } from 'react'
import BlogPreview from '@/components/BlogPreview'
import { UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons'

export default function Page() {
  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
    const fetchBlogs=async()=>{
      const data = await fetch("/api/blogs");
      setBlogs(await data.json());
    }
    fetchBlogs();
  },[])
  // const data = await fetch("/api/blogs");
  // setBlogs(await data.json());
  // const blogs = await data.json();

  const pclass="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold";

  return (
    <div className="lg:w-2/3">
      {blogs.map(data => <BlogPreview data={data} /> )}
      <div className="w-full flex justify-between items-center my-6">
        <p className="font-medium">Page <span>2</span> of <span>2</span></p>
        <div className="flex">
          <span className={pclass}><UilAngleLeft size="20" /></span>
          <span className={pclass}>1</span>
          <span className={pclass}>2</span>
          <span className={pclass}><UilAngleRight size="20" /></span>
        </div>
      </div>
    </div>
  )
}
