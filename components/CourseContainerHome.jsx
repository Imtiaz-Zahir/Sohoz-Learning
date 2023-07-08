import React from "react";
import Image from "next/image";
import { UisStar } from '@iconscout/react-unicons-solid';
import { UilClockThree,UilUser } from '@iconscout/react-unicons';

export default function CourseContainerHome() {
  return (
    <div className="p-4 bg-cyan-50 rounded-xl">
      <a href="./course.html">
        <img className="w-full rounded-xl" src="/course-11.jpg" alt="" />
      </a>
      <div className="px-4">
        <p className="text-orange-500 text-2xl font-bold my-4">Free</p>
        <a href="./course.html">
          <h1 className="text-2xl hover:text-orange-500 transition-all font-bold">
            Sales Training: Practical Sales Techniques
          </h1>
        </a>
        <div className="flex items-center justify-between my-4 text-lg">
          <span className="text-orange-400 flex">
            {
              <>
                <UisStar />
                <UisStar />
                <UisStar />
                <UisStar />
                <UisStar />
              </>
            }
          </span>
          <p className="text-slate-600 font-medium">(11 Reviews)</p>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <span className="flex items-center gap-2">
            {<UilClockThree size='20' className="pb-1"/>}
            02 hours 20 minutes
          </span>
          <p className="text-slate-600 font-medium flex gap-2">
            {<UilUser size='18'/>}56
          </p>
        </div>
      </div>
    </div>
  );
}
