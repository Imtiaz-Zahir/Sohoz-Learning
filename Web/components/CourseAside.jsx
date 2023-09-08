"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  UilSignal,
  UilGraduationCap,
  UilClock,
  UilSync,
  UilBookOpen,
} from "@iconscout/react-unicons";

export default function CourseAside({ course }) {
  const router = useRouter();

  return (
    <aside className="lg:w-2/5 max-w-[320px] ml-auto">
      <div className="rounded-xl overflow-hidden w-full shadow-xl">
        {course.video && <iframe
          className="w-full"
          src={course.video}
          frameborder="0"
        ></iframe>}
        <div className="p-4">
          <p className="text-3xl my-2 font-bold">৳ {course.price}</p>
          <h4
            onClick={() => {
              sessionStorage.setItem("course", JSON.stringify({
                id:course.id,
                title:course.title,
                price:course.price,
                image:course.image
              }));
              router.push("/checkout");
            }}
            className="cursor-pointer w-full text-center py-3 bg-orange-500 text-xl font-bold rounded-lg text-white my-4"
          >
            Enroll Now
          </h4>
        </div>
        <hr />
        <div className="p-4 grid grid-cols-2 font-medium gap-y-2">
          <span className="flex text-slate-600 items-center gap-2">
            <UilSignal size="16" />
            Level
          </span>
          <p className="text-right">{course.lavel}</p>
          <span className="flex text-slate-600 items-center gap-2">
            <UilGraduationCap size="16" />
            Total
          </span>
          <p className="text-right">{course.enrollments.length} Enrolled</p>
          <span className="flex text-slate-600 items-center gap-2">
            <UilClock size="16" />
            Duration
          </span>
          <p className="text-right">{course.duration}</p>
          <span className="flex text-slate-600 items-center gap-2">
            <UilSync size="16" />
            Last Updated
          </span>
          <p className="text-right">{course.updatedAt.toString().slice(4, 15)}</p>
          <span className="flex text-slate-600 items-center gap-2">
            <UilBookOpen size="16" />
            Total Lessons
          </span>
          <p className="text-right">{course.lesson} Lessons</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden w-full shadow-xl p-6 my-2">
        <h5 className="my-4 text-xl font-bold mx-1">Course Content</h5>
        <ul className="list-disc text-lg w-full pl-8">
          {course.couresContent.map((data, index) => {
            return (
              <li className="my-2" key={index}>
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
