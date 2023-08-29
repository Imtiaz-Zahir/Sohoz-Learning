import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Enrolled() {
  return (
    <div className="lg:p-6 lg:w-[80%]">
            <h1 className="text-2xl font-bold">Enrolled Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 my-8">
                <div className="rounded-xl overflow-hidden border border-slate-300">
                    <Image className="w-full" height={200} width={300} src="/course/course-9.jpg" alt="Sohoz Leaning"/>
                    <div className="p-4">
                        {/* <div className="flex text-lg">
                            <span className="text-orange-400">
                                <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                                <i className="uis uis-star"></i><i className="uil uil-star"></i>
                            </span>
                            <h4 className="mx-4 font-semibold">4.5</h4>
                        </div> */}
                            <h1 className="font-bold text-xl my-3">Learn java with bipul</h1>
                        <div>
                            <h1 className="flex justify-between font-medium my-2">
                                <p>56 Lessons</p>
                                <p>0% Complete</p>
                            </h1>
                            <div className="w-full h-1 bg-slate-200 rounded-full">
                                <div className="w-[70%] h-1 bg-orange-400 rounded-full"></div>
                            </div>
                        </div>
                        <Link href=""
                            className="border border-orange-500 rounded-lg text-lg font-semibold mt-4 flex items-center justify-center text-orange-500 py-2 hover:bg-orange-500 hover:text-white">
                            Start Learning</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
