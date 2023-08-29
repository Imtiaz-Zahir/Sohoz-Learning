import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UilLocationPinAlt, UilEnvelopeAlt, UilPhoneVolume, UilFacebookF, UilTwitter, UilYoutube } from '@iconscout/react-unicons';

export default async function Footer() {
    const data = await fetch(`http://localhost/oursite/apis/popular_post.php`,{next:{revalidate:86400}});
    const blogs = await data.json();
    return (
        <footer className="w-full bg-[#0e0a38] px-0 xs:px-2 sm:px-6 lg:px-12 text-white text-xl font-bold">
            <div className="py-20 lg:flex">
                <div className="px-6">
                    <Image width={200} height={40} className='h-10' src="/logo-white.png" alt="Sohoz Leaning" />
                    <p className="my-4">We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students</p>
                    <div className="flex items-center gap-4">
                        <p>Follow Us</p>
                        <Link href="https://www.youtube.com/@sohozlearning" target='_blank' className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center"><UilYoutube size="30" color="#0e0a38"/></Link>
                        <Link href="https://www.facebook.com/sohoz.learning.1" target='_blank' className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center"><UilFacebookF size="30" color="#0e0a38"/></Link>
                        {/* <Link href="" className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center"><UilTwitter size="30" color="#0e0a38"/></Link> */}
                    </div>
                </div>
                <div className="w-full rounded-xl px-6">
                    <h3 className="text-2xl my-4 font-bold">Popular Posts</h3>
                    <div className="flex items-center my-2">
                        <Image className="h-20 w-24 rounded-md" height={80} width={96} src={`/blog/${blogs[0].imgurlki}`} alt={blogs[0].titletaki} />
                        <div className="p-4">
                            <Link href={`/blogs/${blogs[0].posotid}`} className="font-bold text-sm mb-3 hover:text-orange-500 transition-all">{blogs[0].titletaki}</Link>
                            <p className="text-xs text-slate-500">{blogs[0].date}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full font-bold px-6">
                    <h3 className="text-2xl my-4">Contact Us</h3>
                    <p className="my-6 flex">{<UilLocationPinAlt size="24" color="#f97316" className="mx-4" />}119/A, Mount View, London</p>
                    <p className="my-6 flex">{<UilEnvelopeAlt size="24" color="#f97316" className="mx-4" />}support@example.com</p>
                    <p className="my-6 flex">{<UilPhoneVolume size="24" color="#f97316" className="mx-4" />}+8802343546654</p>
                </div>
            </div>
            <p className="py-4 border-t border-gray-600 text-center w-full font-sans font-medium text-white text-xl">© Copy 2021. All Rights Reserved</p>
        </footer>
    )
}
