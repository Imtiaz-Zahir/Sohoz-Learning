"use client";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [data, setData] = useState({
    id:"",
    image:"",
    price:0,
    title:"",
    video:"",
    about:"",
    lavel:"",
    learningPoient:[
        {point:""},
        {point:""},
        {point:""},
        {point:""},
        {point:""},
        {point:""},
    ],
    createdAt:"",
    updatedAt:"",
  });
  useEffect(() => {
    async function getData() {
      await fetch("/api/admin/courses/singelCourse", {
        method: "POST",
        body: JSON.stringify({ id: params.CourseId }),
      })
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    getData();
  }, []);

  async function updatecourse(e) {
    e.preventDefault();
     const data = {
      id: params.CourseId,
       price: parseInt(e.target.price.value),
       image: e.target.image.value,
       video:e.target.video.value,
       title: e.target.title.value,
       about: e.target.about.value,
       lavel: e.target.lavel.value,
       learningPoient: [
         { point: e.target.learningPoient1.value },
         { point: e.target.learningPoient2.value },
         { point: e.target.learningPoient3.value },
         { point: e.target.learningPoient4.value },
         { point: e.target.learningPoient5.value },
         { point: e.target.learningPoient6.value }
       ]
     }
     const res = await fetch('/api/courses', {
       method: 'POST',
       body: JSON.stringify(data),
     })
     alert(res.status===201?"Course Updated":"Course Not updated")
     res.status===201?e.target.reset():null
   }

  return (
    <section  className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 grid grid-cols-2 gap-8">
      <form onSubmit={updatecourse} className="flex flex-col gap-4">
        <input
          type="text"
          name="image"
          placeholder="image"
          value={data.image}
          className="border-2 border-slate-500 focus:outline-none"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={data.title}
          onChange={(e)=>{setData({...data,title:e.target.value})}}
          className="border-2 border-slate-500 focus:outline-none"
          required
        />
        <input
          type="text"
          name="video"
          placeholder="short Video"
          value={data.video}
          onChange={(e)=>{setData({...data,video:e.target.value})}}
          className="border-2 border-slate-500 focus:outline-none"
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={data.price}
          onChange={(e)=>{setData({...data,price:parseInt(e.target.value)})}}
          className="border-2 border-slate-500 focus:outline-none"
          required
        />
        <select
          name="lavel"
          value={data.lavel}
          onChange={(e)=>{setData({...data,lavel:e.target.value})}}
          className="border-2 border-slate-500 focus:outline-none"
          required
        >
          <option value="All">All</option>
          <option value="Biganer">Biganer</option>
          <option value="Advance">Advance</option>
        </select>
        <textarea
          name="about"
          id=""
          cols="30"
          rows="10"
          placeholder="about"
          value={data.about}
          onChange={(e)=>{setData({...data,about:e.target.value})}}
          className="border-2 border-slate-500 focus:outline-none"
          required
        ></textarea>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="learningPoient1"
            placeholder="learningPoient1"
            value={data.learningPoient[0].point}
            onChange={(e)=>{data.learningPoient[0].point=e.target.value}}
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="learningPoient2"
            placeholder="learningPoient2"
            value={data.learningPoient[1].point}
            onChange={(e)=>{setData({...data,title:e.target.value})}}
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="learningPoient3"
            placeholder="learningPoient3"
            value={data.learningPoient[2].point}
            onChange={(e)=>{setData({...data,title:e.target.value})}}
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="learningPoient4"
            placeholder="learningPoient4"
            value={data.learningPoient[3].point}
            onChange={(e)=>{setData({...data,title:e.target.value})}}
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="learningPoient5"
            placeholder="learningPoient5"
            value={data.learningPoient[4].point}
            onChange={(e)=>{setData({...data,title:e.target.value})}}
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="learningPoient6"
            placeholder="learningPoient6"
            value={data.learningPoient[5].point}
            onChange={(e)=>{setData({...data,title:e.target.value})}}
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </section>
  );
}
