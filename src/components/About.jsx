import React from 'react'

export default function About() {
  return (
    <>
    <section className="px-0 xs:px-2 sm:px-6 lg:px-32 py-20 grid grid-cols-1 justify-center gap-6 lg:grid-cols-3">
        <img className="rounded-2xl mt-28 hidden lg:block" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/about-img-1.jpg" alt=""/>
        <img className="rounded-2xl w-full" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/img-lg-2.jpg" alt=""/>
        <img className="rounded-2xl mt-28 hidden lg:block" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/about-img-3.jpg" alt=""/>
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
                <i className="fa-regular fa-sun text-orange-600 text-5xl"></i>
                <h2 className="font-bold text-xl my-8">High Quality Courses</h2>
                <p className="text-center">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            </div>
            <div className="rounded-lg flex flex-col items-center p-6 hover:shadow-xl bg-white">
                <i className="fa-solid fa-user-secret text-orange-600 text-5xl"></i>
                <h2 className="font-bold text-xl my-8">Expert Instructors</h2>
                <p className="text-center">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            </div>
            <div className="rounded-lg flex flex-col items-center p-6 hover:shadow-xl bg-white">
                <i className="fa-solid fa-unlock-keyhole text-orange-600 text-5xl"></i>
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
            <div className="p-8 bg-white border border-slate-400 flex flex-col rounded-xl cha transition-all duration-500">
                <i className="text-orange-500 text-7xl fa-solid fa-quote-right"></i>
                <span className="text-orange-400 text-2xl"><i className="uis uis-star"></i><i className="uis uis-star"></i><i
                        className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i></span>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet
                    nibh nec urna. In nisi neque, aliquet vel, dapibus mattis.</p>
                <div className="flex items-center gap-6">
                    <img className="rounded-full w-20"
                        src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg" alt=""/>
                    <div>
                        <p className="text-xl mb-2 font-medium">Kane William</p>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
            <div className="p-8 bg-white border border-slate-400 flex flex-col rounded-xl cha transition-all duration-500">
                <i className="text-orange-500 text-7xl fa-solid fa-quote-right"></i>
                <span className="text-orange-400 text-2xl"><i className="uis uis-star"></i><i className="uis uis-star"></i><i
                        className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i></span>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet
                    nibh nec urna. In nisi neque, aliquet vel, dapibus mattis.</p>
                <div className="flex items-center gap-6">
                    <img className="rounded-full w-20"
                        src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg" alt=""/>
                    <div>
                        <p className="text-xl mb-2 font-medium">Kane William</p>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
            <div className="p-8 bg-white flex border border-slate-400 flex-col rounded-xl cha transition-all duration-500">
                <i className="text-orange-500 text-7xl fa-solid fa-quote-right"></i>
                <span className="text-orange-400 text-2xl"><i className="uis uis-star"></i><i className="uis uis-star"></i><i
                        className="uis uis-star"></i><i className="uis uis-star"></i><i className="uis uis-star"></i></span>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet
                    nibh nec urna. In nisi neque, aliquet vel, dapibus mattis.</p>
                <div className="flex items-center gap-6">
                    <img className="rounded-full w-20"
                        src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg" alt=""/>
                    <div>
                        <p className="text-xl mb-2 font-medium">Kane William</p>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
