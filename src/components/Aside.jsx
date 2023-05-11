import React from 'react'

export default function Aside() {
  return (
    <aside className="lg:w-[30%] w-full">
            <div className="shadow-lg w-full p-6 rounded-xl my-6">
                <h3 className="text-xl my-4 font-bold">Recent Posts</h3>
                <div className="flex items-center">
                    <img className="h-24 w-24 rounded-md" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/blog-5-1200x600.jpg" alt=""/>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm mb-3 hover:text-orange-500 transition-all">Learn Webs Applications Development from Experts</a>
                        <p className="text-xs text-slate-500">April 1, 2021</p>
                    </div>
                </div>
            </div>
            <div className="shadow-lg w-full p-6 rounded-xl flex flex-col my-6">
                <h3 className="text-xl my-4 font-bold">Categories</h3>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Business</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Courses</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Education</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Graphics Design</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Programming</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Web Design</a>
            </div>
            <div className="shadow-lg w-full p-6 rounded-xl flex flex-col my-6">
                <h3 className="text-xl my-4 font-bold">Archives</h3>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>April 2021</a>
            </div>
            <div className="shadow-lg w-full p-6 rounded-xl flex flex-col my-6">
                <h3 className="text-xl my-4 font-bold">Categories</h3>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Register</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Log in</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Entries feed</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Comments feed</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>WordPress.org</a>
            </div>
        </aside>
  )
}
