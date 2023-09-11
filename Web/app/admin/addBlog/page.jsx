'use client'
import React from 'react'

export default function page() {
    async function addBlog(e) {
        e.preventDefault();
        await fetch("/api/admin/blogs",{
            method:"POST",
            body:JSON.stringify({
                image:e.target.image.value,
                title:e.target.title.value,
                content:e.target.content.value
            })
        }).then(res=>{
            if(res.status===201){
                alert("Blog Added")
                e.target.reset()
            }else{
                alert("Blog Not Added")
            }
        })
    }
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-28 grid grid-cols-2">
      <div>
      <h1 className="text-2xl font-bold my-5">Post Blog</h1>
      <form onSubmit={addBlog} className="flex flex-col gap-4">
        <input
          type="text"
          name="image"
          placeholder="image"
          className="border-2 border-slate-500 focus:outline-none"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          className="border-2 border-slate-500 focus:outline-none"
          required
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="content"
          className="border-2 border-slate-500 focus:outline-none"
          required
        ></textarea>
        
        <button className="bg-orange-500 text-white focus:outline-none" type="submit">submit</button>
      </form>
      </div>
    </section>
  )
}
