import React from "react";
import Link from "next/link";
import Image from "next/image";
import CourseContainerHome from "@/components/CourseContainerHome";
import FAQ from "@/components/FAQ";
import {
  UilUnlockAlt,
  UilBookOpen,
  UilPhoneVolume,
} from "@iconscout/react-unicons";
import { UisStar } from "@iconscout/react-unicons-solid";

export default function Home() {
  return (
    <>
      <section className="w-full px-0 pt-12 mb-16 bag xs:px-2 sm:px-6 lg:px-20 lg:flex lg:justify-between lg:items-center lg:pt-20 lg:mb-24">
        <div className="w-full px-0 xs:px-2 text-center lg:text-start xs:pb-8 lg:w-2/4">
          <p className="font-semibold text-2xl my-6 xs:text-lg text-orange-500">
            START LEARNING FROM HOME
          </p>
          <h1 className="font-bold text-4xl lg:text-6xl my-2">
            Connect With Adam
          </h1>
          <h1 className="font-bold text-4xl lg:text-6xl my-2">
            & Start Learning
          </h1>
          <p className="font-semibold text-xl my-6">
            I'm Highly Experienced In Web Programming. I'm Teaching Online For
            About 20+ Years. I Can Help You To Improve Your Skill.
          </p>
        </div>
        <div className="w-2/4 px-4 hidden lg:block">
          <Image width={500} height={700} className="w-full" src="/single-instructor-1.png" alt="" />
        </div>
      </section>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-14 xl:px-20 my-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex p-4 shadow-lg">
          {<UilUnlockAlt size="60" color="#ea580c" className="m-4" />}
          <div>
            <h3 className="my-3 text-2xl font-bold">Life Time Access</h3>
            <p className="text-slate-600">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.
            </p>
          </div>
        </div>
        <div className="flex p-4 shadow-lg">
          {<UilBookOpen size="60" color="#ea580c" className="m-4" />}
          <div>
            <h3 className="my-3 text-2xl font-bold">Free Course Materials</h3>
            <p className="text-slate-600">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.
            </p>
          </div>
        </div>
        <div className="flex p-4 shadow-lg">
          {<UilPhoneVolume size="60" color="#ea580c" className="m-4" />}
          <div>
            <h3 className="my-3 text-2xl font-bold">Dedicated Support</h3>
            <p className="text-slate-600">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 my-28 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center">
        <Image height={900} width={700}  className="rounded-3xl" src="/a2.jpg" alt="" />
        <div className="text-center">
          <p className="text-orange-500 my-4 font-semibold">ABOUT ME</p>
          <h2 className="text-4xl font-bold my-4">
            I'm Teaching Online For About 5+ Years On Programming
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non.
          </p>
          <p>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
          <Link href="./about">
            <button className="px-10 py-4 bg-orange-600 rounded-3xl my-6 font-semibold text-white hover:bg-blue-900">
              LEARN MORE
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 my-20">
        <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-5xl text-orange-500 font-bold">1,200+</h4>
            <p className="text-xl font-semibold my-2">Students Enrolled</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-5xl text-orange-500 font-bold">15+</h4>
            <p className="text-xl font-semibold my-2">Online Courses</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-5xl text-orange-500 font-bold">99%</h4>
            <p className="text-xl font-semibold my-2">Success Rate</p>
          </div>
        </div>
      </section>
      {/* <section className="w-full py-20 p-0 xs:px-2 sm:px-6 lg:px-20 my-20 bg-cyan-50 text-center lg:text-start">
        <h2 className="text-orange-600 mb-2 font-medium">CATEGORIES</h2>
        <div className="lg:flex lg:justify-between lg:items-center">
            <h1 className="text-4xl font-bold">Popular Categories</h1>
            <Link href="./courses.html"><button
                className="text-lg text-orange-600 border-2 rounded-3xl border-orange-600 px-10 py-4 font-semibold hover:bg-orange-600 hover:text-white hidden lg:block">BROWSE
                ALL CATEGORIES</button></Link>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-4">
            <div className="flex flex-col justify-center items-center">
                <Link href="./courses.html"><img className="w-full rounded-lg"
                    src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg" alt=""/></Link>
                    <Link href="./courses.html"><p className="text-2xl font-bold my-4 hover:text-orange-500">Development</p></Link>
                <p>4 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link href="./courses.html"><img className="w-full rounded-lg"
                    src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg" alt=""/></Link>
                    <Link href="./courses.html"><p className="text-2xl font-bold my-4 hover:text-orange-500">Development</p></Link>
                <p>4 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link href="./courses.html"><img className="w-full rounded-lg"
                    src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg" alt=""/></Link>
                    <Link href="./courses.html"><p className="text-2xl font-bold my-4 hover:text-orange-500">Development</p></Link>
                <p>4 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link href="./courses.html"><img className="w-full rounded-lg"
                    src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg" alt=""/></Link>
                    <Link href="./courses.html"><p className="text-2xl font-bold my-4 hover:text-orange-500">Development</p></Link>
                <p>4 Courses</p>
            </div>
        </div>
    </section> */}
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 my-20">
        <div className="flex justify-center items-center flex-col mb-10 text-center">
          <p className="text-orange-600 font-medium mb-3">COURSES</p>
          <h2 className="text-2xl font-bold">Explore Popular Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {
            <>
              <CourseContainerHome />
              <CourseContainerHome />
              <CourseContainerHome />
              <CourseContainerHome />
              <CourseContainerHome />
              <CourseContainerHome />
            </>
          }
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <Link href="./courses">
            <button className="text-lg text-orange-600 border-2 rounded-3xl border-orange-600 px-10 py-4 font-semibold hover:bg-orange-600 hover:text-white">
              BROWSE ALL COURSES
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full py-20 px-0 xs:px-2 sm:px-6 lg:px-20 my-28 flex items-center bg-red-50 text-center lg:justify-between lg:text-start">
        <div className="lg:w-2/5 lg:pr-4">
          <h2 className="text-orange-600 font-medium">STUDENT SUCCES</h2>
          <h3 className="text-5xl font-bold my-3">
            Success Story Of My Students
          </h3>
          <p className="font-medium text-slate-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non.
          </p>
          <Link href="./courses">
            <button className="px-10 py-4 bg-orange-600 rounded-3xl my-6 font-semibold text-white hover:bg-blue-900">
              ENROLL NOW
            </button>
          </Link>
        </div>
        <div className="w-3/5 p-3 sha rounded-3xl hidden lg:block">
          <Image height={600} width={800} className="w-full rounded-xl" src="/course-11.jpg" alt="" />
        </div>
      </section>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 my-20 lg:flex lg:justify-between lg:items-center">
        <div className="text-center lg:text-start lg:w-2/5">
          <h2 className="text-orange-600 font-medium">TESTIMONIAL</h2>
          <h3 className="text-5xl font-bold my-4">
            What Says My Students About The Platform
          </h3>
          <p className="font-medium text-slate-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-7/12 lg:pr-12">
          <div className="p-8 bg-white flex flex-col rounded-xl cha transition-all duration-500 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
            <span className="text-orange-400 flex">
              {
                <>
                  <UisStar />
                  <UisStar />
                  <UisStar />
                  <UisStar />
                  <UisStar />
                </>
              }
            </span>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. aliquet nibh nec urna. In nisi neque, aliquet
              vel, dapibus mattis.
            </p>
            <div className="flex items-center gap-6">
              <Image height={80} width={80} className="rounded-full" src="/client-1.jpg" alt="" />
              <div>
                <p className="text-xl mb-2 font-medium">Kane William</p>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white flex flex-col rounded-xl cha transition-all duration-500 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
            <span className="text-orange-400 flex">
              {
                <>
                  <UisStar />
                  <UisStar />
                  <UisStar />
                  <UisStar />
                  <UisStar />
                </>
              }
            </span>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. aliquet nibh nec urna. In nisi neque, aliquet
              vel, dapibus mattis.
            </p>
            <div className="flex items-center gap-6">
            <Image height={80} width={80} className="rounded-full" src="/client-1.jpg" alt="" />
              <div>
                <p className="text-xl mb-2 font-medium">Kane William</p>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-0 xs:px-2 sm:px-6 lg:px-20 my-20 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-purple-50">
        <Image height={500} width={700} className="rounded-3xl" src="/live-webinar-img.jpg" alt="" />
        <div className="text-center">
          <h2 className="text-orange-600 font-medium">LIVE WEBINAR</h2>
          <h3 className="text-5xl font-bold my-3">Join My Upcoming Webinars</h3>
          <p className="font-medium text-slate-600 my-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non.
          </p>
          <p className="font-medium text-slate-600">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
          <Link href="./register">
            <button className="px-10 py-4 bg-orange-600 rounded-3xl my-6 font-semibold text-white hover:bg-blue-900">
              REGISTER NOW
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 my-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image height={900} width={700} className="rounded-xl w-full" src="/about-img-2.jpg" alt="" />
        </div>
        <div>
          <h3 className="text-4xl font-bold my-3 text-center">
            Why Choose Us?
          </h3>
          <div className="flex items-center my-2">
            <i className="fa-solid fa-user-tie text-orange-600 text-6xl my-4 mr-4"></i>
            <div>
              <h1 className="text-xl font-bold my-1">Highly Experienced</h1>
              <p className="text-lg">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim.
              </p>
            </div>
          </div>
          <div className="flex items-center my-2">
            {<UilBookOpen size="60" color="#ea580c" className="m-4" />}
            <div>
              <h1 className="text-xl font-bold my-1">
                Question, Quiz & Course Materials
              </h1>
              <p className="text-lg">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim.
              </p>
            </div>
          </div>
          <div className="flex items-center my-2">
            {<UilUnlockAlt size="60" color="#ea580c" className="m-4" />}
            <div>
              <h1 className="text-xl font-bold my-1">
                Lifetime Course Update & Access
              </h1>
              <p className="text-lg">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim.
              </p>
            </div>
          </div>
          <div className="flex items-center my-2">
            {<UilPhoneVolume size="60" color="#ea580c" className="m-4" />}
            <div>
              <h1 className="text-xl font-bold my-1">Dedicated Support</h1>
              <p className="text-lg">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
