import React from 'react'
import logo2 from '../assets/logo2.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e0a38] px-0 xs:px-2 sm:px-6 lg:px-12 text-white text-xl font-bold">
        <div className="py-20 lg:flex">
            <div className="px-6">
                <img className="h-10" src={logo2} alt=""/>
                <p className="my-4">We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students</p>
                <div className="flex items-center">
                    <p>Follow Us</p>
                    <a href=""><i className="text-[#0e0a38] h-[40px] w-[40px] flex items-center justify-center fa-brands text-center bg-white rounded-full fa-facebook-f mx-2"></i></a>
                    <a href=""><i className="text-[#0e0a38] h-[40px] w-[40px] flex items-center justify-center fa-brands text-center bg-white rounded-full fa-twitter mx-2"></i></a>
                    <a href=""><i className="text-[#0e0a38] h-[40px] w-[40px] flex items-center justify-center fa-brands text-center bg-white rounded-full fa-linkedin mx-2"></i></a>
                    <a href=""><i className="text-[#0e0a38] h-[40px] w-[40px] flex items-center justify-center fa-brands text-center bg-white rounded-full fa-youtube mx-2"></i></a>
                </div>
            </div>
            <div className="w-full rounded-xl px-6">
                <h3 className="text-2xl my-4 font-bold">Recent Posts</h3>
                <div className="flex items-center">
                    <img className="h-24 w-24 rounded-md" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/blog-5-1200x600.jpg" alt=""/>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm mb-3 hover:text-orange-500 transition-all">Learn Webs Applications Development from Experts</a>
                        <p className="text-xs text-slate-500">April 1, 2021</p>
                    </div>
                </div>
            </div>
            <div className="w-full font-bold px-6">
                <h3 className="text-2xl my-4">Contact Us</h3>
                <p className="my-6"><i className="uil uil-location-pin-alt text-orange-500 m-4"></i>119/A, Mount View, London</p>
                <p className="my-6"><i className="uil uil-envelope-alt text-orange-500 m-4"></i>support@example.com</p>
                <p className="my-6"><i className="uil uil-phone-volume text-orange-500 m-4"></i>+8802343546654</p>
            </div>
        </div>
        <p className="py-4 border-t border-gray-600 text-center w-full font-sans font-medium text-white text-xl">© Copy 2021. All Rights Reserved</p>
    </footer>
  )
}
