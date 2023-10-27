'use client'
import React, { useState } from 'react'
import {
  UilAngleDown,
  UilYoutube,
  UilPadlock,
} from "@iconscout/react-unicons";

export default function CourseContent({contant, key, setUrl}) {
  const [open, setOpen] = useState(false);

  return (
    <div key={key} className="rounded-lg border border-slate-400 overflow-hidden my-4 transition-all">
      <div
        onClick={() => setOpen((pre) => !pre)}
        className="flex justify-between items-center p-3 font-bold text-lg bg-slate-50 transition-all cursor-pointer hover:text-orange-500"
      >
        <p>{contant.title}</p>
        <UilAngleDown
          size="24"
          color="#ea580c"
          className={`cursor-pointer ${open ? "rotate-180" : null}`}
        />
      </div>
      {contant.lessons.map((lesson, index) => {
          return (
            <div
            key={index}
              onClick={() => {
                setUrl(lesson.video);
              }}
              className={`${open?null:'hidden'} flex justify-between items-center p-2 border-t border-slate-400 font-medium text-slate-500 hover:bg-slate-100 cursor-pointer`}
            >
              <p className="flex justify-center items-center gap-2">
                <UilYoutube />
                <span>{lesson.title}</span>
              </p>
              <p className="flex justify-center items-center gap-2">
                <span>{lesson.duration} Minutes</span> <UilPadlock />
              </p>
            </div>
          );
        })}
    </div>
  );
}
