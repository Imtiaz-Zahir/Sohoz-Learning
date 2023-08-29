import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default async function Aside() {
    const data = await fetch(`http://localhost/oursite/apis/popular_post.php`);
    const popular = await data.json();
    const data2 = await fetch(`http://localhost/oursite/apis/oldpost.php`);
    const old = await data2.json();
    return (
        <aside className="lg:w-[30%] w-full">
            <div className="shadow-lg w-full p-6 rounded-xl my-6">
                <h3 className="text-xl my-4 font-bold">Popular Posts</h3>
                {popular.map(({imgurlki,titletaki,posotid,date}, index) => {
                    return (
                        <div key={index} className="flex items-center my-2">
                            <Image priority={true} className="rounded-md object-cover" height={80} width={96} src={`/blog/${imgurlki}`} alt={titletaki} />
                            <div className="p-4">
                                <Link href={`/blogs/${posotid}`} className="font-bold text-sm mb-3 hover:text-orange-500 transition-all">{titletaki}</Link>
                                <p className="text-xs text-slate-500">{date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="shadow-lg w-full p-6 rounded-xl my-6">
                <h3 className="text-xl my-4 font-bold">Old Posts</h3>
                {old.map(({imgurlki,titletaki,posotid,date}, index) => {
                    return (
                        <div key={index} className="flex items-center my-2">
                            <Image className="rounded-md object-cover" height={80} width={96} src={`/blog/${imgurlki}`} alt={titletaki} />
                            <div className="p-4">
                                <Link href={`/blogs/${posotid}`} className="font-bold text-sm mb-3 hover:text-orange-500 transition-all">{titletaki}</Link>
                                <p className="text-xs text-slate-500">{date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="shadow-lg w-full p-6 rounded-xl flex flex-col my-6">
                <h3 className="text-xl my-4 font-bold">Archives</h3>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>April 2021</a>
            </div>
            <div className="shadow-lg w-full p-6 rounded-xl flex flex-col my-6">
                <h3 className="text-xl my-4 font-bold">Categories</h3>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Business</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Courses</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Education</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Graphics Design</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Programming</a>
                <a className="hover:text-orange-500 my-2 text-slate-500" href=""><i className="uil uil-angle-right mx-2 text-orange-500"></i>Web Design</a>
            </div>
        </aside>
    )
}
