import React from 'react'
import { UilSignal, UilGraduationCap, UilClock, UilSync, UilBookOpen } from '@iconscout/react-unicons';

export default async function CourseAside({duration,price,total_sold,lesson,lastupdate,courseId}) {
    const data = await fetch(`http://localhost/oursite/apis/course-contant.php?course=${courseId}`);
    const contant = await data.json();
  return (
    <aside className="lg:w[30%] max-w-[320px] mx-auto">
    <div className="rounded-xl overflow-hidden w-full shadow-xl">
        <iframe className="w-full" src="https://www.youtube.com/embed/yGDwk4z9EEg" frameborder="0"></iframe>
        <div className="p-4">
            <p className="text-3xl my-2 font-bold">৳ {price}</p>
            <a href="./cart.html"><h4 className="w-full text-center py-3 bg-orange-500 text-xl font-bold rounded-lg text-white my-4">Enroll Now</h4></a>
        </div>
        <hr />
        <div className="p-4 grid grid-cols-2 font-medium gap-y-2">
            <span className='flex text-slate-600 items-center gap-2'><UilSignal size="16" />Level</span>
            <p>All Levels</p>
            <span className='flex text-slate-600 items-center gap-2'><UilGraduationCap size="16" />Total</span>
            <p>{total_sold} Enrolled</p>
            <span className='flex text-slate-600 items-center gap-2'><UilClock size="16" />Duration</span>
            <p>{duration}</p>
            <span className='flex text-slate-600 items-center gap-2'><UilSync size="16" />Last Updated</span>
            <p>{lastupdate}</p>
            <span className='flex text-slate-600 items-center gap-2'><UilBookOpen size="16" />Last Lessons</span>
            <p>{lesson} Lessons</p>
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
