import React from 'react'
import { UilEnvelopeAlt, UilPhoneVolume, UilLocationPinAlt } from '@iconscout/react-unicons'

export default function Page() {
    return (
        <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="text-center lg:text-start">
                <h1 className="font-bold text-4xl">Leave Us A Message</h1>
                <p className="text-slate-500 text-lg my-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
                <div className="flex items-center my-4 flex-col lg:flex-row">
                    <UilEnvelopeAlt size="60" className="text-orange-500 mx-4" />
                    <div>
                        <h6 className="font-bold text-xl my-2">Email Address :</h6>
                        <p className="text-lg text-slate-500">support@example.com</p>
                    </div>
                </div>
                <div className="flex items-center my-4 flex-col lg:flex-row">
                    <UilPhoneVolume size="60" className="text-orange-500 mx-4" />
                    <div>
                        <h6 className="font-bold text-xl my-2">Phone Number :</h6>
                        <p className="text-lg text-slate-500">+8802343546654</p>
                    </div>
                </div>
                <div className="flex items-center my-4 flex-col lg:flex-row">
                    <UilLocationPinAlt size="60" className="text-orange-500 mx-4" />
                    <div>
                        <h6 className="font-bold text-xl my-2">Our Location :</h6>
                        <p className="text-lg text-slate-500">119/A, Mount View, London</p>
                    </div>
                </div>
            </div>
            <form className="from-shadow gap-4 w-full p-1 xs:p-2 sm:p-6 md:p-16 rounded-xl">


                <input className="my-2 border border-slate-400 w-full h-12 rounded-md px-4 text-lg font-medium" type="text" placeholder="Your Name" name="Name" id="" />



                <input className="my-2 border border-slate-400 w-full h-12 rounded-md px-4 text-lg font-medium" type="email" placeholder="Your Email" name="email" id="" />


                <input className="my-2 border border-slate-400 w-full h-12 rounded-md px-4 text-lg font-medium" type="text" placeholder="subject" name="sub" id="" />

                <textarea className="my-2 border border-slate-400 w-full rounded-md px-4 text-lg font-medium" name="Comment" id="" rows="5" placeholder="Wright your message"></textarea>

                <div className="flex justify-start items-center"><button className="uppercase py-3 px-8 bg-orange-600 hover:bg-blue-900 text-white font-bold rounded-md transition-all duration-300" type="submit">Submit</button></div>
            </form>
        </section>
    )
}
