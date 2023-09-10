"use client";
import React, { useEffect, useState } from "react";
import { UilCheckCircle} from "@iconscout/react-unicons";
import CourseContent from "@/components/courseContent";

export default function Page({ params }) {
  const [url, setUrl] = useState();
  const [_courseContent, setCourseContent] = useState({title:"",couresContent:[]});

  useEffect(()=>{
    async function getData(){
      const data=await fetch('/api/dashbord/course',{
        method:'POST',
        body:JSON.stringify({CourseId:params.CourseId})
      }).then(res=>res.json())
      setCourseContent(data);
      setUrl(data.couresContent[0].lessons[0].video)
    }
    getData()
  },[])

  const totleLesson = _courseContent.couresContent.reduce((acc, crr) => {
    return acc + crr.lessons.length;
  }, 0);
  const progress = 0;

  return (
    <>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 bg-slate-100 text-lg font-medium flex justify-between">
        <p className="text-xl font-bold">{_courseContent.title}</p>
        <p>
          Your Progress: <span className="font-bold">{progress} </span>of
          <span className="font-bold"> {totleLesson}</span> (
          {((progress / totleLesson) * 100).toFixed(2)}%)
        </p>
        <p className="mb-3 flex items-center justify-center gap-2">
          <UilCheckCircle />
          <span>Mrak as Complete</span>
        </p>
      </section>
      <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-8 lg:flex lg:justify-between">
        <aside className="lg:w-[30%] w-full">
          <h5 className="my-4 text-lg font-bold mx-1">Course Content</h5>
          {_courseContent.couresContent.map((contant,index) => <CourseContent contant={contant} key={index} setUrl={setUrl}/>)}
          {_courseContent.couresContent.length===0?<div className="bg-gray-300 animate-pulse h-14 p-3 rounded-lg flex items-center justify-between">
            <p className="h-6 w-40 bg-gray-400 rounded-sm"></p>
            <span className="h-4 w-4 bg-gray-400 rounded-sm"></span>
          </div>:null}
        </aside>
        <div className="lg:w-2/3">
          <iframe
            className='rounded-2xl w-full bg-gray-300'
            src={url}
            allowFullScreen
            height="450px"
          ></iframe>
          {/* <div className="flex justify-center mt-6">
        <div className="px-4 py-2 border border-slate-400 mx-2 cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i> Previous
        </div>
        <div className="px-4 py-2 border border-slate-400 mx-2 cursor-pointer">
          Next <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div> */}
        </div>
      </section>
    </>
  );
}

// function CourseContent(contant, setUrl, index) {
//   // const [open, setOpen] = useState(false);

//   return (
//     <div key={index} className="rounded-lg border border-slate-400 overflow-hidden my-4 transition-all">
//       <div
//         // onClick={() => setOpen((pre) => !pre)}
//         className="flex justify-between items-center p-3 font-bold text-lg bg-slate-50 transition-all cursor-pointer hover:text-orange-500"
//       >
//         <p>{contant.title}</p>
//         <UilAngleDown
//           size="24"
//           color="#ea580c"
//           // className={`cursor-pointer ${open ? "rotate-180" : null}`}
//         />
//       </div>
//       {contant.lessons.map((lesson, index) => {
//           return (
//             <div
//             key={index}
//               onClick={() => {
//                 setUrl(lesson.url);
//               }}
//               className={`${'hidden'} flex justify-between items-center p-2 border-t border-slate-400 font-medium text-slate-500 hover:bg-slate-100 cursor-pointer`}
//             >
//               <p className="flex justify-center items-center gap-2">
//                 <UilYoutube />
//                 <span>{lesson.title}</span>
//               </p>
//               <p className="flex justify-center items-center gap-2">
//                 <span>{lesson.duration}</span> <UilPadlock />
//               </p>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
