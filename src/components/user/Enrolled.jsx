import React from 'react'

export default function Enrolled() {
  return (
    <div className="lg:p-6 lg:w-[80%]">
            <h1 className="text-2xl font-bold">Enrolled Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 my-8">
                <div className="rounded-xl overflow-hidden border border-slate-300">
                    <a href=""><img loading="lazy" className="w-full" src="" alt="Sohoz Leaning"/></a>
                    <div className="p-4">
                        <div className="flex text-lg">
                            <span className="text-orange-400">
                                <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                                <i className="uis uis-star"></i><i className="uil uil-star"></i>
                            </span>
                            <h4 className="mx-4 font-semibold">4.5</h4>
                        </div>
                        <a href="">
                            <h1 className="font-bold text-xl mt-3 mb-8 hover:text-orange-500">bsldfnlsd</h1>
                        </a>
                        <div>
                            <h1 className="flex justify-between font-medium my-2">
                                <p>56</p>
                                <p>0% Complete</p>
                            </h1>
                            <div className="w-full h-1 bg-slate-200 rounded-full">
                                <div className="w-[70%] h-1 bg-orange-400 rounded-full"></div>
                            </div>
                        </div>
                        <a href="../../video.php?enrolledcourses=<?php echo $enrolledcourse; ?>&viewedvideo=<?php echo $viewed_video; ?>"
                            className="border border-orange-500 rounded-lg text-lg font-semibold mt-4 flex items-center justify-center text-orange-500 py-2 hover:bg-orange-500 hover:text-white">
                            Start Learning</a>
                    </div>
                </div>
            </div>
        </div>
  )
}
