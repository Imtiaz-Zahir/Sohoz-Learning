import React from 'react'

export default function CourseReviews() {
    return (
        <>
            <h5 className="my-4 text-lg font-bold mx-1">Student Ratings & Reviews</h5>
            <div className="rounded-lg mb-8 border border-[rgb(153, 153, 153)]">
                <div className="p-4 md:p-8 flex-col border-b border-[rgb(153, 153, 153)]">
                    <div className="md:mr-12 md:w-1/4 md:flex flex-col justify-center items-center">
                        <h1 className="text-8xl font-bold">4.0</h1>
                        <span className="text-orange-400 text-xl my-4">
                            <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                            <i className="uis uis-star"></i><i className="uil uil-star"></i>
                        </span>
                        <p className="text-slate-600">Total 2 Ratings</p>
                    </div>
                    <div className="md:w-3/4">
                        <div className="flex items-center my-2">
                            <i className="uil uil-star mx-2 text-orange-600"></i>
                            <p className="font-bold">5</p>
                            <div className="w-80 -z-10 h-2 rounded-lg overflow-hidden mx-4 relative bg-slate-200">
                                <span className="bg-orange-500 w-2/3 h-2 absolute"></span>
                            </div>
                            <p className="mx-4 font-medium text-lg">1 Rating</p>
                        </div>
                        <div className="flex items-center my-2">
                            <i className="uil uil-star mx-2 text-orange-600"></i>
                            <p className="font-bold">5</p>
                            <div className="w-80 -z-10 h-2 rounded-lg overflow-hidden mx-4 relative bg-slate-200">
                                <span className="bg-orange-500 w-2/3 h-2 absolute"></span>
                            </div>
                            <p className="mx-4 font-medium text-lg">1 Rating</p>
                        </div>
                        <div className="flex items-center my-2">
                            <i className="uil uil-star mx-2 text-orange-600"></i>
                            <p className="font-bold">5</p>
                            <div className="w-80 -z-10 h-2 rounded-lg overflow-hidden mx-4 relative bg-slate-200">
                                <span className="bg-orange-500 w-2/3 h-2 absolute"></span>
                            </div>
                            <p className="mx-4 font-medium text-lg">1 Rating</p>
                        </div>
                        <div className="flex items-center my-2">
                            <i className="uil uil-star mx-2 text-orange-600"></i>
                            <p className="font-bold">5</p>
                            <div className="w-80 -z-10 h-2 rounded-lg overflow-hidden mx-4 relative bg-slate-200">
                                <span className="bg-orange-500 w-2/3 h-2 absolute"></span>
                            </div>
                            <p className="mx-4 font-medium text-lg">1 Rating</p>
                        </div>
                        <div className="flex items-center my-2">
                            <i className="uil uil-star mx-2 text-orange-600"></i>
                            <p className="font-bold">5</p>
                            <div className="w-80 -z-10 h-2 rounded-lg overflow-hidden mx-4 relative bg-slate-200">
                                <span className="bg-orange-500 w-2/3 h-2 absolute"></span>
                            </div>
                            <p className="mx-4 font-medium text-lg">1 Rating</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 flex justify-between">
                    <div className="flex flex-col justify-center items-center w-1/5">
                        <div className="rounded-full w-12 h-12 bg-orange-600 text-white flex justify-center items-center text-xl font-semibold">A</div>
                        <a className="text-xl font-semibold hover:text-orange-500 my-4" href="">Amir</a>
                        <p className="text-slate-600 font-medium">9 months ago</p>
                    </div>
                    <div className="w-3/4 pl-4">
                        <span className="text-orange-400 text-lg">
                            <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                            <i className="uis uis-star"></i><i className="uil uil-star"></i>
                        </span>
                        <p>I truly enjoyed this class and really liked the student-professor interaction. ... The more I learn today, the less risky moves I will make in the future.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
