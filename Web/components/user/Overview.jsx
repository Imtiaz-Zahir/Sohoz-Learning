import React from "react";
import {
  UilBookOpen,
  UilGraduationCap,
  UilTrophy,
} from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";

export default async function Overview() {
  const res = await fetch("/api/deshbord");
  const courses = await res.json();
  console.log(courses);

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
          <h4 className="text-3xl font-bold my-2">1</h4>
          <p>Active Courses</p>
        </div>
        <div className="p-6 border border-slate-300 rounded-lg text-center">
          <span className="rounded-full mx-auto h-16 w-16 text-orange-500 bg-orange-50 flex justify-center items-center">
            <UilTrophy size="24" />
          </span>
          <h4 className="text-3xl font-bold my-2">0</h4>
          <p>Completed Courses</p>
        </div>
      </div>
      {/* <h1 className="text-2xl font-bold">In Progress Courses</h1>
      <div className="my-8">
        <div className="my-4 border border-slate-300 rounded-lg lg:flex items-center justify-between overflow-hidden">
          <Image
            className="lg:w-[35%]"
            height={200}
            width={300}
            src="/course/course-9.jpg"
            alt="Sohoz Learning"
          />
          <div className="lg:w-[65%] p-6">
            <h1 className="text-xl font-semibold my-2">
              Learn java with bipul
            </h1>
            <div className="flex items-center justify-between">
              <h5>
                Total Lessons : <strong>70</strong>
              </h5>
              <h5>
                Completed Lessons : <strong>0</strong>
              </h5>
            </div>
            <div className="flex items-center mt-2 mb-4">
              <div className="w-full h-1 bg-orange-200 rounded-full">
                <div style={{width:"0%"}} className="h-1 bg-orange-400 rounded-full"></div>
              </div>
              <p className="ml-4">
                <strong className="mx-2">0%</strong>Complete
              </p>
            </div>
            <Link href="" className="py-3 px-8 bg-orange-600 hover:bg-blue-900 text-white font-semibold transition-all rounded-md">Continue Learning</Link>
          </div>
        </div>
      </div> */}
      <h1 className="text-2xl font-bold">Enrolled Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 my-8">
        {courses.map(({coures}) => {
          return (
            <div key={coures.id} className="rounded-xl overflow-hidden border border-slate-300">
              <Image
                className="w-full"
                height={200}
                width={300}
                src={`/course/${coures.image}`}
                alt={coures.title}
              />
              <div className="p-4">
                {/* <div className="flex text-lg">
                            <span className="text-orange-400">
                                <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                                <i className="uis uis-star"></i><i className="uil uil-star"></i>
                            </span>
                            <h4 className="mx-4 font-semibold">4.5</h4>
                        </div> */}
                <h1 className="font-bold text-xl my-3">{coures.title}</h1>
                <div>
                  <h1 className="flex justify-between font-medium my-2">
                    <p>56 Lessons</p>
                    <p>0% Complete</p>
                  </h1>
                  <div className="w-full h-1 bg-slate-200 rounded-full">
                    <div className="w-[70%] h-1 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
                <Link
                  href=""
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
