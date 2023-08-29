import React from 'react'
import BlogPreview from '@/components/BlogPreview'
import { UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons'

export default async function Page() {
  const data = await fetch("http://localhost/oursite/apis/blogs.php", { next: { revalidate: 7200 } });
  const blogs = await data.json();
  const pclass="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold";

  return (
    <div className="lg:w-2/3">
      {blogs.map((data, index) => { return <BlogPreview index={index} data={data} /> })}
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
