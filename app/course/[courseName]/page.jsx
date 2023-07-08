'use client'

import React from 'react'
import { useState } from 'react'
import CourseInfo from '@/components/CourseInfo'
import CourseReviews from '@/components/CourseReviews'

export default function page({params}) {
    const [Info,Review]=useState(<CourseInfo/>)
    const [Active,SetActive]=useState(<><p id="icon" className="mx-4 font-medium leading-10 cursor-pointer border-b-2 border-orange-500 text-orange-500">Course Info</p>
    <p id="review" className="mx-4 font-medium leading-10 cursor-pointer">Reviews</p></>)

    const ClickHandler=(e)=>{
        if(e.target.id==="icon"){
            Review(CourseInfo);
            SetActive(<><p id="icon" className="mx-4 font-medium leading-10 cursor-pointer border-b-2 border-orange-500 text-orange-500">Course Info</p>
            <p id="review" className="mx-4 font-medium leading-10 cursor-pointer">Reviews</p></>)
        }else{
            Review(CourseReviews);
            SetActive(<><p id="icon" className="mx-4 font-medium leading-10 cursor-pointer">Course Info</p>
            <p id="review" className="mx-4 font-medium leading-10 cursor-pointer border-b-2 border-orange-500 text-orange-500">Reviews</p></>)
        }
    }

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 lg:flex lg:justify-between">
            <div className="lg:w-2/3">
                <div className="flex lg:items-center flex-col lg:flex-row">
                    <div className="flex items-center">
                        <div
                            className="rounded-full w-12 h-12 bg-orange-600 mr-4 text-white flex justify-center items-center text-xl font-semibold">
                            A</div>
                        <p className="text-slate-600 font-medium mr-1">By</p>
                        <a className="text-xl font-semibold hover:text-orange-500" href="">Amir</a>
                    </div>

                    <div className="flex my-4 lg:my-0"><span className="text-orange-400 text-lg lg:ml-4">
                        <i className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i>
                        <i className="uis uis-star"></i><i className="uil uil-star"></i>
                    </span>
                        <h4 className="mx-4 font-semibold">4.00</h4>
                        <p className="text-slate-600 font-medium">(11 Ratings)</p></div>
                    <div className="flex"><i className="uil uil-bookmark lg:ml-12 mr-4 text-lg font-semibold cursor-pointer hover:text-orange-500">
                        Wishlist</i>
                        <i className="uil uil-share text-lg font-semibold cursor-pointer hover:text-orange-500"> share</i></div>
                </div>
                <div className="inline-grid sm:flex items-center mb-8 mt-4">
                    <h4 className="text-slate-600 mr-2">Categories:</h4>
                    <div
                        className="py-2 px-4 bg-slate-100 hover:bg-orange-600 text-slate-500 hover:text-white rounded-md cursor-pointer m-2">
                        Marketing</div>
                    <div
                        className="py-2 px-4 bg-slate-100 hover:bg-orange-600 text-slate-500 hover:text-white rounded-md cursor-pointer m-2">
                        Development</div>
                    <div
                        className="py-2 px-4 bg-slate-100 hover:bg-orange-600 text-slate-500 hover:text-white rounded-md cursor-pointer m-2">
                        Business</div>
                </div>
                <div className="flex" onClick={ClickHandler}>
                    {Active}
                </div>
                <hr/>
                {Info}
            </div>
            <aside className="lg:w[30%]">
                <div className="rounded-xl overflow-hidden w-full shadow-xl">
                    <iframe className="w-full" src="https://www.youtube.com/embed/yGDwk4z9EEg" frameborder="0"></iframe>
                    <div className="p-4">
                        <p className="text-3xl my-2 font-bold">Free</p>
                        <a href="./cart.html"><h4 className="w-full text-center py-3 bg-orange-500 text-xl font-bold rounded-lg text-white my-4">Enroll Now</h4></a>
                        <p className="text-slate-600 text-center font-medium">Free access this course</p>
                    </div>
                    <hr />
                    <div className="p-4 grid grid-cols-2">
                        <div className="flex text-slate-600 font-medium my-1">
                            <i className="uil uil-signal mx-2"></i>
                            <p>Level</p>
                        </div>
                        <p className="font-medium my-1">All Levels</p>
                        <div className="flex text-slate-600 font-medium my-1">
                            <i className="uil uil-graduation-cap mx-2"></i>
                            <p>Total</p>
                        </div>
                        <p className="font-medium my-1">37 Enrolled</p>
                        <div className="flex text-slate-600 font-medium my-1">
                            <i className="uil uil-clock mx-2"></i>
                            <p>Duration</p>
                        </div>
                        <p className="font-medium my-1">07 hours 28 minutes</p>
                        <div className="flex text-slate-600 font-medium my-1">
                            <i className="uil uil-sync mx-2"></i>
                            <p>Last Updated</p>
                        </div>
                        <p className="font-medium my-1">March 19, 2022</p>
                        <div className="flex text-slate-600 font-medium my-1">
                            <i className="uil uil-book-open mx-2"></i>
                            <p>Lessons</p>
                        </div>
                        <p className="font-medium my-1">10 Lessons</p>
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden w-full shadow-xl p-6 my-8">
                    <h5 className="my-4 text-xl font-bold mx-1">Course Content</h5>
                    <ul className="list-disc text-lg list-inside">
                        <li>7.5 hours on-demand video</li>
                        <li>10 articles</li>
                        <li>31 downloadable resources</li>
                        <li>Full lifetime access</li>
                        <li>Access on mobile and TV</li>
                        <li>Certificate of Completion</li>
                    </ul>
                </div>
            </aside>
        </section>
  )
}
