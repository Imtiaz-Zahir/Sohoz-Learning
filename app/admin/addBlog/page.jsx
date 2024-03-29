'use client'
import React, { useState } from 'react'
import parse from "html-react-parser";

export default function Page() {
  const[submit,setSubmit] = useState('submit')
  const[disable,setDisable] = useState(false)
  const[content,setContent] = useState('')

  async function addBlog(e) {
    e.preventDefault();
    setDisable(true)
    setSubmit('submiting...')
    const res = await fetch("/api/admin/blogs", {
      method: "POST",
      body: new FormData(e.target),
    });
    alert(res.status === 201 ? "Blog Added" : "Blog Not Added");
    res.status === 201 ? e.target.reset() : null;
    setSubmit('submit')
    setDisable(false)
  }

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-28 grid grid-cols-2 gap-5">
      <div>
      <h1 className="text-2xl font-bold my-5">Post Blog</h1>
      <form onSubmit={addBlog} className="flex flex-col gap-4">
        <input
          type="file"
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
          onChange={(e) => setContent(e.target.value)}
          cols="30"
          rows="10"
          placeholder="content"
          className="border-2 border-slate-500 focus:outline-none"
          required
        ></textarea>
        
        <button className="bg-orange-500 text-white focus:outline-none" type="submit" disabled={disable}>{submit}</button>
      </form>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Blog content Preview</h1>
        <div className="mt-5 border-2 h-full">{parse(content)}</div>
      </div>
    </section>
  )
}
