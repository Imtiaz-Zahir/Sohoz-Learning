import React from 'react'
import BlogPreview from '@/components/BlogPreview'
import { UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons'

export default async function Page() {
  const data = await fetch("http://localhost/oursite/apis/blogs.php",{next:{revalidate:7200}});
  const blogs = await data.json();

  return (
   <div className="lg:w-2/3">
      {blogs.map((data,index) => {return <BlogPreview key={index} data={data}/>})}
      <div className="w-full flex justify-between items-center my-6">
          <p className="font-medium">Page <span>2</span> of <span>2</span></p>
          <div className="flex">
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold"><UilAngleLeft size="20" /></div>
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold">1</div>
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold">2</div>
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold"><UilAngleRight size="20" /></div>
          </div>
        </div>
    </div>
  )
}
