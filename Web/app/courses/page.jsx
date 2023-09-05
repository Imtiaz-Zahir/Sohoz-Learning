import React from 'react'
import CourseContainer from '@/components/CourseContainer'
import { getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]/route'
import { UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons'
import { PrismaClient } from '@prisma/client'

export default async function Page() {
  const session = await getServerSession(authOptions);
  
  const prisma = new PrismaClient();
  const courses = await prisma.courses.findMany({
    take:5,
    select:{
      id:true,
      title:true,
      price:true,
      image:true,
      reviews:{
        select:{
          rating:true
        }
      },
      enrollments:{
        select:{
          id:true
        }
      }
    }
  })
  await prisma.$disconnect();

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20">
      <h1 className="text-3xl md:text-5xl font-bold my-6 text-center mb-4">Our All Courses</h1>
      <div className="w-full flex flex-wrap">
        {courses.map((data) => <CourseContainer data={data} session={session}/> )}

        {/* <div className="w-full flex justify-between items-center my-6">
          <p className="font-medium">Page <span>2</span> of <span>2</span></p>
          <div className="flex">
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold"><UilAngleLeft size="20" /></div>
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold">1</div>
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold">2</div>
            <div className="rounded-lg w-10 h-10 bg-slate-200 cursor-pointer hover:bg-orange-600 mx-2 hover:text-white flex justify-center items-center text-xl font-semibold"><UilAngleRight size="20" /></div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
