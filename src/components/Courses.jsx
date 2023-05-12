import React from 'react'
import CourseContainer from './CourseContainer'

export default function Courses() {
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20">
        <h1 className="text-3xl md:text-5xl font-bold my-6 text-center pb-4">Our All Courses</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {<><CourseContainer/><CourseContainer/><CourseContainer/><CourseContainer/><CourseContainer/><CourseContainer/></>}
            <div className="w-full col-span-1 md:col-span-2 xl:col-span-3 flex justify-between items-center my-6">
                <p className="font-medium">Page <span>2</span> of <span>2</span></p>
                <div className="flex">
                    <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold"><i className="uil uil-angle-left"></i></div>
                    <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold">1</div>
                    <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold">2</div>
                    <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold"><i className="uil uil-angle-right"></i></div>
                </div>
            </div>
        </div>
    </section>
  )
}
