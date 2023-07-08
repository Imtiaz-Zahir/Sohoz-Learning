import React from 'react'
import Link from 'next/link';

export default function BlogPreview() {
    return (
        <div className="mb-10">
            <img className="w-full rounded-xl" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/blog-5-1200x600.jpg" alt="" />
            <div className="md:flex my-6 font-semibold">
                <div className="flex"><p><i className="uil uil-user text-orange-500 mx-2"></i>AMIR</p>
                    <p><i className="uil uil-calendar-alt text-orange-500 mx-2"></i>APRIL 1, 2021</p></div>

                <p><i className="uil uil-tag-alt text-orange-500 mx-2"></i>PROGRAMMING, WEB DESIGN</p>
            </div>
            <Link href="/blog" className="text-3xl font-bold hover:text-orange-500">Learn Webs Applications Development from Experts</Link>
            <p className="my-6 text-slate-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]</p>
            <Link href="/blog" className="uppercase py-4 px-8 bg-orange-600 hover:bg-blue-900 text-white font-bold rounded-md">read more</Link>
        </div>
    )
}
