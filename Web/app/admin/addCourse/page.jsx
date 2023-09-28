"use client";
import React, { useState } from "react";
import parse from "html-react-parser";

export default function Page() {
  const [about, setAbout] = useState("");
  const [submit, setSubmit] = useState("submit");
  const [disable, setDisable] = useState(false);

  async function addcourse(e) {
    e.preventDefault();
    setDisable(true);
    setSubmit("submiting...");
    const res = await fetch("/api/admin/courses", {
      method: "POST",
      body: new FormData(e.target),
    });
    alert(res.status === 201 ? "Course Added" : "Course Not Added");
    res.status === 201 ? e.target.reset() : null;
    setSubmit("submit");
    setDisable(false);
  }

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-28 grid grid-cols-2 gap-5">
      <div>
        <h1 className="text-2xl font-bold my-5">Post Courses</h1>
        <form onSubmit={addcourse} className="flex flex-col gap-4">
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
          <input
            type="text"
            name="video"
            placeholder="short Video"
            className="border-2 border-slate-500 focus:outline-none"
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <select
            name="lavel"
            className="border-2 border-slate-500 focus:outline-none"
            required
          >
            <option value="All">All</option>
            <option value="Biganer">Biganer</option>
            <option value="Advance">Advance</option>
          </select>
          <textarea
            name="about"
            onChange={(e) => setAbout(e.target.value)}
            id=""
            cols="30"
            rows="10"
            placeholder="about"
            className="border-2 border-slate-500 focus:outline-none"
            required
          ></textarea>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="learningPoient1"
              placeholder="learningPoient1"
              className="border-2 border-slate-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="learningPoient2"
              placeholder="learningPoient2"
              className="border-2 border-slate-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="learningPoient3"
              placeholder="learningPoient3"
              className="border-2 border-slate-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="learningPoient4"
              placeholder="learningPoient4"
              className="border-2 border-slate-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="learningPoient5"
              placeholder="learningPoient5"
              className="border-2 border-slate-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="learningPoient6"
              placeholder="learningPoient6"
              className="border-2 border-slate-500 focus:outline-none"
              required
            />
            <button
              className="bg-orange-500 text-white col-span-2 focus:outline-none"
              type="submit"
              disabled={disable}
            >
              {submit}
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Course About Preview</h1>
        <div className="mt-5 border-2 h-full">{parse(about)}</div>
      </div>
    </section>
  );
}
