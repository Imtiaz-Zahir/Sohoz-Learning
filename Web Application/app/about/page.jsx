import React from 'react'
import Image from 'next/image'
import Review from '@/components/Review'
import { UilBright, UilUserMd, UilUnlockAlt } from '@iconscout/react-unicons'

export default function Page() {
    return (
        <>
            <section className="px-0 xs:px-2 sm:px-6 lg:px-32 py-20 grid grid-cols-1 justify-center gap-6 lg:grid-cols-3">
                <Image className="rounded-2xl mt-28 hidden lg:block" height={410} width={330} src="/about-img-1.jpg" alt="image-1" />
                <Image className="rounded-2xl w-full" height={410} width={330} src="/img-lg-2.jpg" alt="image-2" />
                <Image className="rounded-2xl mt-28 hidden lg:block" height={410} width={330} src="/about-img-3.jpg" alt="image-3" />
            </section>
            <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-12 lg:flex lg:justify-center">
                <div className="text-center mb-10 lg:w-3/4">
                    <p className="text-orange-600 font-semibold">WHO WE ARE</p>
                    <h2 className="text-3xl font-bold text-center my-8 sm:text-4xl">We Are Providing The Best Quality Online Courses. Our All Instructors Are High Expert</h2>
                    <p className="text-center text-lg text-slate-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                </div>
            </section>
            <section className="w-full px-0 xs:px-2 sm:px-6 lg:px-20 my-20 flex justify-center">
                <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-5xl text-orange-500 font-bold">125,600+</h4>
                        <p className="text-xl font-semibold my-2">Students Enrolled</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-5xl text-orange-500 font-bold">200+</h4>
                        <p className="text-xl font-semibold my-2">Registered Instructors</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-5xl text-orange-500 font-bold">100%</h4>
                        <p className="text-xl font-semibold my-2">Success Rate</p>
                    </div>
                </div>
            </section>
            <section className="py-20 xs:px-2 sm:px-6 lg:px-20 my-12 bg-slate-100">
                <div className="flex justify-center items-center flex-col mb-10">
                    <p className="text-orange-600 font-semibold">BEST LEARNING PLATFORM</p>
                    <h2 className="text-4xl font-bold w-3/4 text-center my-8">Why We Are The Best</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
                    <div className="rounded-lg flex flex-col items-center p-6 hover:shadow-xl bg-white">
                        <UilBright size="48" className="text-orange-600" />
                        <h2 className="font-bold text-xl my-8">High Quality Courses</h2>
                        <p className="text-center">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                    </div>
                    <div className="rounded-lg flex flex-col items-center p-6 hover:shadow-xl bg-white">
                        <UilUserMd size="48" className="text-orange-600" />
                        <h2 className="font-bold text-xl my-8">Expert Instructors</h2>
                        <p className="text-center">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                    </div>
                    <div className="rounded-lg flex flex-col items-center p-6 hover:shadow-xl bg-white">
                        <UilUnlockAlt size="48" className="text-orange-600" />
                        <h2 className="font-bold text-xl my-8">Life Time Access</h2>
                        <p className="text-center">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                    </div>
                </div>
            </section>
            <section className="px-0 xs:px-2 sm:px-6 lg:px-20 my-12">
                <div className="flex justify-center items-center flex-col mb-10">
                    <p className="text-orange-600 font-medium">TESTIMONIAL</p>
                    <h2 className="text-4xl font-bold w-3/4 text-center my-8">What Says Our Students</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <Review /><Review /><Review />
                </div>
            </section>
        </>
    )
}
