'use client'

import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react'
import { UilUser, UilAlignCenterAlt, UilTimes, UilShoppingCart } from "@iconscout/react-unicons"

import { cartContext } from '@/app/context';

const items = [{
  name: "Courses",
  url: "/courses"
},
// {
//   name: "Webinars",
//   url: "/webinars"
// },
{
  name: "Blogs",
  url: "/blogs"
},
{
  name: "About Us",
  url: "/about"
},
{
  name: "Contact",
  url: "/contact"
}];

export default function Navbar({session}) {

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      document.getElementById("nav").classList.toggle("scroll", window.scrollY > 0)
    })
  },[])

  const clickHandler = () => {
    if (document.getElementById("ul").classList[14] == "hidden") {
      document.getElementById("ul").classList.remove("hidden");
      seticon(<UilTimes onClick={clickHandler} size="40" color="#ea580c" id="bar" className="border border-orange-500 md:p-3 p-2 rounded-md cursor-pointer" />)
    } else {
      document.getElementById("ul").classList.add("hidden");
      seticon(<UilAlignCenterAlt onClick={clickHandler} size="40" color="#ea580c" id="bar" className="border border-orange-500 md:p-3 p-2 rounded-md cursor-pointer" />);
    }
  }
  const close = () => {
    if (document.getElementById("ul").classList[14] != "hidden") {
      document.getElementById("ul").classList.add("hidden");
      seticon(<UilAlignCenterAlt onClick={clickHandler} size="40" color="#ea580c" id="bar" className="border border-orange-500 md:p-3 p-2 rounded-md cursor-pointer" />)
    }
  }
  const [icon, seticon] = useState(<UilAlignCenterAlt onClick={clickHandler} size="40" color="#ea580c" id="bar" className="border border-orange-500 md:p-3 p-2 rounded-md cursor-pointer" />)

  

  return (
    <nav id="nav" className="flex w-full transition-all px-0 py-0 xs:py-1 sm:py-2 md:py-3 justify-between items-center fixed xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
      <Link href="/"><Image priority={true} width={200} height={40} className='h-10' src="/logo.png" alt="Sohoz Leaning" /></Link>
      <div className="flex">
        <div className="lg:hidden my-2 md:my-1 flex gap-2">
          <Link href="/login">{<UilUser size="40" color="#ffffff" className="bg-orange-600 p-2 md:p-3 rounded-md" />}</Link>
          {icon}
        </div>
        <ul id="ul" onClick={close} className="items-center lg:text-lg text-3xl lg:flex absolute lg:sticky bg-white lg:bg-transparent lg:w-full lg:h-full w-screen h-screen right-0 top-14 hidden">
          {items.map((item, index) => {
            return (
              <li key={index} className="mx-4 lg:font-bold hover:text-orange-600 font-medium text-center lg:text-start my-4 lg:my-0 border-b-2 border-black lg:border-0"><Link href={item.url}>{item.name}</Link></li>
            )
          })}
          {/* <Link href="./cart"><li className="mx-4 font-bold hover:text-orange-600 cursor-pointer text-2xl flex my-4 lg:my-0 justify-center lg:justify-start">{<UilShoppingCart size="24" />}
            <div className="h-5 w-5 bg-orange-500 rounded-full -ml-1 -mt-2 items-center justify-center text-sm text-white flex">{cartItem}</div>
          </li></Link> */}
        </ul>
        <div className="hidden ml-8 px-6 bg-orange-600 py-2 rounded items-center font-semibold text-white lg:flex">
          {session ?
            <>
              <span className="border-r-2 px-3 hover:text-black cursor-pointer" onClick={signOut}>Logout</span>
              <Link className="px-3 hover:text-black" href="/dashbord">Dashbord</Link>
            </>:
            <>
              <Link href="/login" className="border-r-2 px-3 hover:text-black cursor-pointer">Login</Link>
              <Link className="px-3 hover:text-black" href="/register">Register</Link>
            </> }
        </div>
      </div>
    </nav>
  )
}
