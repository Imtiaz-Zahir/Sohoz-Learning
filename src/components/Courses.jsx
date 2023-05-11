import React from 'react'
import CourseContainer from './CourseContainer'

export default function Courses() {
  return (
    <>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 flex w-full">
        <div className="p-2 border-2 border-slate-700 rounded-lg font-medium">Course Title (a-z)<i
                className="fa-solid fa-chevron-down ml-1"></i></div>
        <ul className="absolute hidden bg-white border-2 border-slate-700 rounded-lg mt-12 z-10">
            <li className="py-1 px-4 hover:bg-blue-50 cursor-pointer">Release Date (newest first)</li>
            <li className="py-1 px-4 hover:bg-blue-50 cursor-pointer">Release Date (oldest first)</li>
            <li className="py-1 px-4 hover:bg-blue-50 cursor-pointer">Course Title (a-z)</li>
            <li className="py-1 px-4 hover:bg-blue-50 cursor-pointer">Course Title (z-a)</li>
        </ul>
    </section>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-20 flex justify-between">
        <form className="w-1/5 hidden lg:block" action="">
            <div className="my-8">
                <h3 className="text-lg font-bold my-4">Category</h3>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Business" name="Business"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Business">Business</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Design" name="Design"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Design">Design</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Development" name="Development"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Development">Development</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Heath & Fitness" name="Heath & Fitness"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Heath & Fitness">Heath & Fitness</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Marketing" name="Marketing"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Marketing">checkbox</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Math" name="Math"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Math">Math</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Photography" name="Photography"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Photography">Photography</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="PHP" name="PHP"/>
                <label className="my-3 mx-2 text-xl" htmlFor="PHP">PHP</label><br/>
            </div>
            <div className="my-8">
                <h3 className="text-lg font-bold my-4">Level</h3>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="All Levels" name="All Levels"/>
                <label className="my-3 mx-2 text-xl" htmlFor="All Levels">All Levels</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Beginner" name="Beginner"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Beginner">Beginner</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Intermediate" name="Intermediate"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Intermediate">Intermediate</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Expert" name="Expert"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Expert">Expert</label><br/>
            </div>
            <div className="my-8">
                <h3 className="text-lg font-bold my-4">Price</h3>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Free" name="Free"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Free">Free</label><br/>
                <input className="my-3 mx-2 text-xl" type="checkbox" value="Paid" name="Paid"/>
                <label className="my-3 mx-2 text-xl" htmlFor="Paid">Paid</label><br/>
            </div>
            <div className="p-1 border-2 border-orange-500 w-40 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer"><i className="uil uil-multiply mx-2"></i>Clear All Filters</div>
        </form>
        <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
    </>
  )
}
