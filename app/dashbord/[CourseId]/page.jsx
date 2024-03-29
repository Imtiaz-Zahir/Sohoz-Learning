"use client";
import React, { useEffect, useState } from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";
import CourseContent from "@/components/courseContent";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

export default function Page({ params }) {
  const [url, setUrl] = useState();
  const [_courseContent, setCourseContent] = useState({
    title: "",
    image: "",
    couresContent: [],
  });

  useEffect(() => {
    fetch("/api/dashbord/course", {
      method: "POST",
      body: JSON.stringify({ CourseId: params.CourseId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCourseContent(data);
        setUrl(data.couresContent[0].lessons[0].video);
      });
  }, []);

  const totleLesson = _courseContent.couresContent.reduce((acc, crr) => {
    return acc + crr.lessons.length;
  }, 0);
  const progress = 0;

  return (
    <>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 pt-20 bg-slate-100 text-lg font-medium lg:flex justify-between">
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
          {_courseContent.couresContent.map((contant, index) => (
            <CourseContent contant={contant} key={index} setUrl={setUrl} />
          ))}
          {_courseContent.couresContent.length === 0 ? (
            <div className="bg-gray-300 animate-pulse h-14 p-3 rounded-lg flex items-center justify-between">
              <p className="h-6 w-60 bg-gray-200 rounded-sm"></p>
              <span className="h-4 w-4 bg-gray-200 rounded-sm"></span>
            </div>
          ) : null}
        </aside>

        {/* <div class="lg:w-2/3">
          <div class="container">
            <div class="video-container" id="video-container">
              <div class="playback-animation" id="playback-animation">
                <svg class="playback-icons">
                  <use class="hidden" href="#play-icon"></use>
                  <use href="#pause"></use>
                </svg>
              </div>

              <video
                controls
                height="450px"
                class="video"
                id="video"
                preload="metadata"
                poster="./poster.webp"
              >
                <source src={`/videos/test.mp4`} type="video/mp4"></source>
              </video>

              <div class="video-controls hidden" id="video-controls">
                <div class="video-progress">
                  <progress id="progress-bar" value="0" min="0"></progress>
                  <input
                    class="seek"
                    id="seek"
                    value="0"
                    min="0"
                    type="range"
                    step="1"
                  />
                  <div class="seek-tooltip" id="seek-tooltip">
                    00:00
                  </div>
                </div>

                <div class="bottom-controls">
                  <div class="left-controls">
                    <button data-title="Play (k)" id="play">
                      <svg class="playback-icons">
                        <use href="#play-icon"></use>
                        <use class="hidden" href="#pause"></use>
                      </svg>
                    </button>

                    <div class="volume-controls">
                      <button
                        data-title="Mute (m)"
                        class="volume-button"
                        id="volume-button"
                      >
                        <svg>
                          <use class="hidden" href="#volume-mute"></use>
                          <use class="hidden" href="#volume-low"></use>
                          <use href="#volume-high"></use>
                        </svg>
                      </button>

                      <input
                        class="volume"
                        id="volume"
                        value="1"
                        data-mute="0.5"
                        type="range"
                        max="1"
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <div class="time">
                      <time id="time-elapsed">00:00</time>
                      <span> / </span>
                      <time id="duration">00:00</time>
                    </div>
                  </div>

                  <div class="right-controls">
                    <button
                      data-title="PIP (p)"
                      class="pip-button"
                      id="pip-button"
                    >
                      <svg>
                        <use href="#pip"></use>
                      </svg>
                    </button>
                    <button
                      data-title="Full screen (f)"
                      class="fullscreen-button"
                      id="fullscreen-button"
                    >
                      <svg>
                        <use href="#fullscreen"></use>
                        <use href="#fullscreen-exit" class="hidden"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg style={{display:"none"}}>
            <defs>
              <symbol id="pause" viewBox="0 0 24 24">
                <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
              </symbol>

              <symbol id="play-icon" viewBox="0 0 24 24">
                <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
              </symbol>

              <symbol id="volume-high" viewBox="0 0 24 24">
                <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
              </symbol>

              <symbol id="volume-low" viewBox="0 0 24 24">
                <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
              </symbol>

              <symbol id="volume-mute" viewBox="0 0 24 24">
                <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
              </symbol>

              <symbol id="fullscreen" viewBox="0 0 24 24">
                <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
              </symbol>

              <symbol id="fullscreen-exit" viewBox="0 0 24 24">
                <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
              </symbol>

              <symbol id="pip" viewBox="0 0 24 24">
                <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
              </symbol>
            </defs>
          </svg>

          <div class="flex justify-center mt-6">
            <div class="px-4 py-2 border border-slate-400 mx-2 cursor-pointer">
              <i class="fa-solid fa-arrow-left"></i>
              Previous
            </div>
            <div class="px-4 py-2 border border-slate-400 mx-2 cursor-pointer">
              Next <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div> */}
        <div className="lg:w-2/3 mt-10 lg:mt-0">
          {url && (
            <Player
              src={`/videos/${url}`}
              poster={`/course/${_courseContent.image}`}
            />
          )}

          {/* <video src="/videos/test.mp4" className="h-[450px] mx-auto" poster="/course/course-9.jpg" height={450} controls ></video> */}
          {/* <iframe
            className='rounded-2xl w-full bg-gray-300'
            src={url}
            allowFullScreen
            height="450px"
          ></iframe> */}
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
