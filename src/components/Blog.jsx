import React from 'react'
import Aside from './Aside'

export default function Blog() {
  return (
    <section className="px-0 xs:px-2 sm:px-6 md:px-14 lg:px-20 py-20 lg:flex lg:justify-between">
        <div className="lg:w-2/3">
            <img className="w-full rounded-xl"
                src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/blog-5-1200x600.jpg" alt=""/>
            <div className="md:flex my-6 font-semibold">
                <div className="flex"><p><i className="uil uil-user text-orange-500 mx-2"></i>AMIR</p>
                <p><i className="uil uil-calendar-alt text-orange-500 mx-2"></i>APRIL 1, 2021</p></div>
                
                <p><i className="uil uil-tag-alt text-orange-500 mx-2"></i>PROGRAMMING, WEB DESIGN</p>
            </div>
            <a href="" className="text-3xl font-bold hover:text-orange-500">Learn Webs Applications Development from
                Experts</a>
            <p className="my-6 text-slate-500 font-semibold text-md md:text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit
                nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
            <p className="my-6 text-slate-500 font-semibold text-md md:text-lg">Sed egestas, ante et vulputate volutpat, eros pede semper
                est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
                id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
                volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
            <div className="my-6 bg-slate-100 p-6">
                <p className="font-semibold text-slate-500 italic text-xl my-8">Morbi interdum mollis sapien. Sed ac risus.
                    Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
                    dolor a purus. Sed vel lacus.</p>
                <p className="text-orange-500 font-bold text-xl">- Adam Smith</p>
            </div>
            <p className="my-6 text-slate-500 font-semibold text-md md:text-lg">Suspendisse mauris. Fusce accumsan mollis eros.
                Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa
                sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut
                scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc
                iaculis mi in ante. Vivamus imperdiet nibh feugiat est.</p>
            <h6 className="text-3xl font-semibold">Effective Ways</h6>
            <p className="my-6 text-slate-500 font-semibold text-md md:text-lg">Ut convallis, sem sit amet interdum consectetuer, odio
                augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere.
                Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et
                magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut
                condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae
                ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing
                lacus. Donec metus. Curabitur gravida</p>
            <img src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/img-lg-1-1024x584.jpg" alt=""/>
            <p className="my-6 text-slate-500 font-semibold text-md md:text-lg">Sed egestas, ante et vulputate volutpat, eros pede semper
                est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
                id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
                volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
            <ul className="my-6 text-slate-500 font-medium text-lg list-disc list-inside">
                <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod</li>
                <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue</li>
                <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                    tristique cursus.</li>
            </ul>
            <hr/>
            <div className="flex mt-6 font-medium text-lg mb-16">
                <p>Tags:</p>
                <a className="bg-slate-200 mx-2 px-2 rounded-sm hover:bg-orange-500" href="">Design</a>
                <a className="bg-slate-200 mx-2 px-2 rounded-sm hover:bg-orange-500" href="">Development</a>
            </div>
            <h4 className="font-bold text-2xl">Leave A Comment</h4>
            <p className="my-3 text-slate-500 font-medium text-lg">All fields marked with an asterisk (*) are required</p>
            <form className="grid gap-4 grid-cols-2 w-full">
                <div className="lg:col-span-1 col-span-2">
                    <label className="font-bold text-xl" htmlFor="name">Name :</label><br/>
                    <input className="my-2 border border-gray-300 w-full h-10 rounded-md px-4 text-lg font-semibold" type="text" name="Name" id=""/>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <label className="font-bold text-xl" htmlFor="email">Email :</label><br/>
                    <input className="my-2 w-full border border-gray-300 h-10 rounded-md px-4 text-lg font-semibold" type="email" name="email" id=""/>
                </div>
                <div className="col-span-2">
                    <label className="font-bold text-xl" htmlFor="Website">Website :</label><br/>
                    <input className="my-2 w-full border border-gray-300 h-10 rounded-md px-4 text-lg font-semibold" type="text" name="Website" id=""/>
                </div>
                <div className="col-span-2">
                    <label className="font-bold text-xl" htmlFor="Comment">Your Comment :</label><br/>
                    <textarea className="my-2 w-full rounded-md border border-gray-300 px-4 text-lg font-semibold" name="Comment" id="" rows="7"></textarea>
                </div>
                <div className="col-span-2 flex justify-start items-center"><button className="uppercase py-3 px-8 bg-orange-600 hover:bg-blue-900 text-white font-bold rounded-md transition-all duration-300" type="submit">POST COMMENT</button></div>
                
            </form>
        </div>
        {<Aside/>}
    </section>
  )
}
