import React from 'react'

export default function CourseContainerHome() {
    return (
        <div className="p-4 bg-cyan-50 rounded-xl">
            <a href="./course.html"><img className="w-full rounded-xl"
                src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-11.jpg" alt="" /></a>
            <div className="px-4">
                <p className="text-orange-500 text-2xl font-bold my-4">Free</p>
                <a href="./course.html"><h1 className="text-2xl hover:text-orange-500 transition-all font-bold">Sales Training: Practical Sales Techniques</h1></a>
                <div className="flex items-center justify-between my-4 text-lg">
                    <span className="text-orange-400"><i className="uis uis-star"></i><i className="uis uis-star"></i><i
                        className="uis uis-star"></i><i className="uis uis-star"></i><i className="uil uil-star"></i></span>
                    <p className="text-slate-600 font-medium">(11 Reviews)</p>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                    <span><i className="uil uil-clock-three"></i>02 hours 20 minutes</span>
                    <p className="text-slate-600 font-medium"><i className="uil uil-user"></i>56</p>
                </div>
            </div>
        </div>
    )
}
