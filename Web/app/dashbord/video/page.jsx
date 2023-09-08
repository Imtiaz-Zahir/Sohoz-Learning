"use client";
import React, { useState } from "react";
import {
  UilCheckCircle,
  UilAngleDown,
  UilYoutube,
  UilPadlock,
} from "@iconscout/react-unicons";

const coursecon = [
  {
    title: "Setting up",
    video: [
      {
        title: "Basic Definitions",
        duration: "07:00",
        url: "https://www.youtube.com/embed/XHOmV4js_E",
      },
      {
        title: "Basic Definitions",
        duration: "07:00",
        url: "https://www.youtube.com/embed/XHOmBV4js_E",
      },
      {
        title: "Basic Definitions",
        duration: "07:00",
        url: "https://www.youtube.com/embed/XHOmBVjs_E",
      },
    ],
  },
];

export default function Page() {
  const [url, setUrl] = useState("https://www.youtube.com/embed/XHOmBV4js_E");
  const totleLesson = coursecon.reduce((acc, crr) => {
    return acc + crr.video.length;
  }, 0);
  const progress = 1;

  return (
    <>
      <section class="w-full px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 bg-slate-100 text-lg font-medium flex justify-between">
        <p className="text-xl font-bold">
          Complete Trello Beginners to Advanced
        </p>
        <p>
          Your Progress: <span class="font-bold">{progress} </span>of
          <span class="font-bold"> {totleLesson}</span> (
          {((progress / totleLesson) * 100).toFixed(2)}%)
        </p>
        <p class="mb-3 flex items-center justify-center gap-2">
          <UilCheckCircle />
          <span>Mrak as Complete</span>
        </p>
      </section>
      <section class="px-0 xs:px-2 sm:px-6 lg:px-20 my-8 lg:flex lg:justify-between">
        <aside class="lg:w-[30%] w-full">
          <h5 class="my-4 text-lg font-bold mx-1">Course Content</h5>
          {coursecon.map((contant,index) => CourseContent(contant, setUrl, index))}
        </aside>
        <div class="lg:w-2/3">
          <iframe
            class="rounded-2xl w-full"
            src={url}
            allowfullscreen
            height="450px"
            frameborder="0"
          ></iframe>
          {/* <div class="flex justify-center mt-6">
        <div class="px-4 py-2 border border-slate-400 mx-2 cursor-pointer">
          <i class="fa-solid fa-arrow-left"></i> Previous
        </div>
        <div class="px-4 py-2 border border-slate-400 mx-2 cursor-pointer">
          Next <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div> */}
        </div>
      </section>
    </>
  );
}

function CourseContent(contant, setUrl, index) {
  const [open, setOpen] = useState(false);

  return (
    <div key={index} class="rounded-lg border border-slate-400 overflow-hidden my-4">
      <div
        onClick={() => setOpen((pre) => !pre)}
        class="flex justify-between items-center p-3 font-bold text-lg bg-slate-50 transition-all cursor-pointer hover:text-orange-500"
      >
        <p>{contant.title}</p>
        <UilAngleDown
          size="24"
          color="#ea580c"
          className={`cursor-pointer ${open ? "rotate-180" : null}`}
        />
      </div>
      {open &&
        contant.video.map((lesson, index) => {
          return (
            <div
            key={index}
              onClick={() => {
                setUrl(lesson.url);
              }}
              class="flex justify-between items-center p-2 border-t border-slate-400 font-medium text-slate-500 hover:bg-slate-100 cursor-pointer"
            >
              <p className="flex justify-center items-center gap-2">
                <UilYoutube />
                <span>{lesson.title}</span>
              </p>
              <p className="flex justify-center items-center gap-2">
                <span>{lesson.duration}</span> <UilPadlock />
              </p>
            </div>
          );
        })}
    </div>
  );
}
