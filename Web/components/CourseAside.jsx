'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { UilSignal, UilGraduationCap, UilClock, UilSync, UilBookOpen } from '@iconscout/react-unicons';
import Link from 'next/link';

export default function CourseAside({courseId,contant,course}) {
    const [inCart,setInCart]=useState()
  useEffect(()=>{const cartCourse = JSON.parse(sessionStorage.getItem("cartCours"));
  const inses = cartCourse===null?-1:cartCourse.findIndex(Object => { return Object.id === courseId });setInCart(inses>=0)},[])
  const router = useRouter();
  return (
    <aside className="lg:w[30%] max-w-[320px] mx-auto">
    <div className="rounded-xl overflow-hidden w-full shadow-xl">
        <iframe className="w-full" src="https://www.youtube.com/embed/yGDwk4z9EEg" frameborder="0"></iframe>
        <div className="p-4">
            <p className="text-3xl my-2 font-bold">৳ {course.price}</p>
            {inCart?<Link href="/cart"><h4 className="w-full text-center py-3 bg-orange-500 text-xl font-bold rounded-lg text-white my-4">View Cart</h4></Link>:
            <h4 onClick={
            async() => {
              const myobj = {
                id: courseId,
                img: course.img,
                title: course.title,
                price: course.price
              };
              const cartCours = await sessionStorage.getItem("cartCours");
              let myArrayFromStorage = await JSON.parse(cartCours);
              await cartCours === null ? myArrayFromStorage = [myobj] : myArrayFromStorage.push(myobj);
              const jsonString = await JSON.stringify(myArrayFromStorage);
              await sessionStorage.setItem("cartCours", jsonString);
              setInCart(true);
              await router.push('/cart');
            }
          } className="cursor-pointer w-full text-center py-3 bg-orange-500 text-xl font-bold rounded-lg text-white my-4">Enroll Now</h4>}
        </div>
        <hr />
        <div className="p-4 grid grid-cols-2 font-medium gap-y-2">
            <span className='flex text-slate-600 items-center gap-2'><UilSignal size="16" />Level</span>
            <p>All Levels</p>
            <span className='flex text-slate-600 items-center gap-2'><UilGraduationCap size="16" />Total</span>
            <p>{course.total_sold} Enrolled</p>
            <span className='flex text-slate-600 items-center gap-2'><UilClock size="16" />Duration</span>
            <p>{course.duration}</p>
            <span className='flex text-slate-600 items-center gap-2'><UilSync size="16" />Last Updated</span>
            <p>{course.lastupdate}</p>
            <span className='flex text-slate-600 items-center gap-2'><UilBookOpen size="16" />Total Lessons</span>
            <p>{course.lesson} Lessons</p>
        </div>
    </div>
    <div className="rounded-xl overflow-hidden w-full shadow-xl p-6 my-2">
        <h5 className="my-4 text-xl font-bold mx-1">Course Content</h5>
        <ul className="list-disc text-lg w-full pl-8">
            {contant.map((data,index) => {return <li className='my-2' key={index}>{data}</li>})}
        </ul>
    </div>
</aside>
  )
}
