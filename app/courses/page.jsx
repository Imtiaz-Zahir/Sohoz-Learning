import React from 'react'
import CourseContainer from '@/components/CourseContainer'
import { UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons'
import { PrismaClient } from '@prisma/client'

export default async function Page() {
const prisma = new PrismaClient();
  const res = await prisma.courses.findMany({
    take:6,
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
      },
      couresContent:{
        select:{
          lessons:{
            select:{
              duration:true
            }
          }
        }
      }
    }
  })
  await prisma.$disconnect();

  const courses = res.reduce((acc, crr) => {
    const courserLength = crr.couresContent.reduce((acc, crr) => {
      return acc + crr.lessons.duration
    },0)
    const length=Math.floor(courserLength/60)+"h "+courserLength%60
    const res ={
      id: crr.id,
    title: crr.title,
    price: crr.price,
    image: crr.image,
    reviews: crr.reviews,
    enrollments: crr.enrollments,
    courserLength:length
    }
    return [...acc,res]
  },[])

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20">
      <h1 className="text-3xl md:text-5xl font-bold my-6 text-center mb-4">Our All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {courses.map((data) => <CourseContainer data={data} key={data.id}/> )}

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
