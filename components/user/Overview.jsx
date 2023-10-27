"use client";
import React, { useEffect, useState } from "react";
import {
  UilBookOpen,
  UilGraduationCap,
  UilTrophy,
} from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";

export default async function Overview() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/dashbord")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(courses)

  // API response e.g.
  // [
  //   {
  //     id: String,
  //     image: String,
  //     title: String,
  //     lessons: Int,
  //   },
  //   {
  //     id: String,
  //     image: String,
  //     title: String,
  //     lessons: Int,
  //   },
  // ];

  return (
    <div className="py-6 lg:p-6 lg:w-[80%] w-full">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid lg:grid-cols-3 gap-4 my-8">
        <div className="p-6 border border-slate-300 rounded-lg text-center">
          <span className="rounded-full h-16 w-16 mx-auto text-orange-500 bg-orange-50 flex justify-center items-center">
            <UilBookOpen size="24" />
          </span>
          <h4 className="text-3xl font-bold my-2">{courses.length}</h4>
          <p>Enrolled Courses</p>
        </div>
        <div className="p-6 border border-slate-300 rounded-lg text-center">
          <span className="rounded-full mx-auto h-16 w-16 text-orange-500 bg-orange-50 flex justify-center items-center">
            <UilGraduationCap size="24" />
          </span>
          <h4 className="text-3xl font-bold my-2">0</h4>
          <p>Active Course</p>
        </div>
        <div className="p-6 border border-slate-300 rounded-lg text-center">
          <span className="rounded-full mx-auto h-16 w-16 text-orange-500 bg-orange-50 flex justify-center items-center">
            <UilTrophy size="24" />
          </span>
          <h4 className="text-3xl font-bold my-2">0</h4>
          <p>Completed Course</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Enrolled Course</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 my-8">
        {courses.map((coures) => {
          return (
            <div
              key={coures.id}
              className="rounded-xl overflow-hidden border border-slate-300"
            >
              <Image
                className="w-full"
                height={200}
                width={300}
                src={`/course/${coures.image}`}
                alt={coures.title}
              />
              <div className="p-4">
                <h1 className="font-bold text-xl my-3">{coures.title}</h1>
                <div>
                  <h1 className="flex justify-between font-medium my-2">
                    <p>{coures.lessons} Lessons</p>
                    <p>0% Complete</p>
                  </h1>
                  <div className="w-full h-1 bg-slate-200 rounded-full">
                    <div className="w-[70%] h-1 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
                <Link
                  href={`/dashbord/${coures.id}`}
                  className="border border-orange-500 rounded-lg text-lg font-semibold mt-4 flex items-center justify-center text-orange-500 py-2 hover:bg-orange-500 hover:text-white"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
