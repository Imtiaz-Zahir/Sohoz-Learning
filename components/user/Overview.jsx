import React from 'react'

export default function Overview() {
  return (
    <div className="py-6 lg:p-6 lg:w-[80%] w-full">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <a href="../../video.php?joybanglacourseidxyz=something&somethign=something">
                <div className="grid lg:grid-cols-3 gap-4 my-8">
                    <div className="p-6 border border-slate-300 rounded-lg text-center">
                        <div
                            className="rounded-full h-16 w-16 mx-auto text-orange-500 bg-orange-50 flex justify-center items-center">
                            <i className="uil uil-book-open text-2xl"></i>
                        </div>
                        <h4 className="text-3xl font-bold my-2">1</h4>
                        <p>Enrolled Courses</p>
                    </div>
                    <div className="p-6 border border-slate-300 rounded-lg text-center">
                        <div
                            className="rounded-full mx-auto h-16 w-16 text-orange-500 bg-orange-50 flex justify-center items-center">
                            <i className="uil uil-graduation-cap text-2xl"></i>
                        </div>
                        <h4 className="text-3xl font-bold my-2">1</h4>
                        <p>Active Courses</p>
                    </div>
                    <div className="p-6 border border-slate-300 rounded-lg text-center">
                        <div
                            className="rounded-full mx-auto h-16 w-16 text-orange-500 bg-orange-50 flex justify-center items-center">
                            <i className="uil uil-trophy text-2xl"></i>
                        </div>
                        <h4 className="text-3xl font-bold my-2">0</h4>
                        <p>Completed Courses</p>
                    </div>
                </div>
            </a>
            <h1 className="text-2xl font-bold">In Progress Courses</h1>
            <a
                href="">
                <div className="my-8">
                    <div className="my-4 border border-slate-300 rounded-lg lg:flex items-center justify-between">
                        <img className="lg:w-[35%]" src="" alt="Sohoz Learning"/>
                        <div className="lg:w-[65%] p-6">
                            <p><span className="text-orange-400 text-lg mx-2">
                                    <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                                    <i className="uis uis-star"></i><i className="uil uil-star"></i>
                                </span>4.5</p>
                            <h1 className="text-xl font-semibold my-2">gra;lmdf
                            </h1>
                            <h5>Completed Lessons : <strong>
                                    0
                                </strong></h5>
                            <div className="flex items-center">
                                <div className="w-full h-1 bg-orange-200 rounded-full">
                                    <div className="w-[20%] h-1 bg-orange-400 rounded-full"></div>
                                </div>
                                <p className="ml-4"><strong className="mx-2">0%</strong>Complete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
  )
}
