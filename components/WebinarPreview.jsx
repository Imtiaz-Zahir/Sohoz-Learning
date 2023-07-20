import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UilClock,UilCalendarAlt  } from '@iconscout/react-unicons'

export default function WebinarPreview({data,key}) {
    return (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 items-center rounded-xl web">
            <Image className="rounded-lg w-full" height={300} width={200} src={`/webinar/${data.web_img}`} alt={data.web_title} />
            <div>
                <Link className="hover:text-orange-500" href={`/webinars/${data.wegnearid}`}><h2 className="text-2xl font-bold">{data.web_title}</h2></Link>
                <div className="flex my-4 text-orange-500 font-semibold gap-2">
                    <p className="flex items-center gap-1"><UilCalendarAlt size="17"/>{data.date}</p>
                    <p className="flex items-center gap-1"><UilClock size="17"/>{data.time}</p>
                </div>
                <p className="text-lg text-slate-500 font-medium">{data.description.slice(0, 80).concat("....")}</p>
                <Link href={`/webinars/${data.wegnearid}`}><div className="border-orange-500 border hover:bg-orange-500 hover:text-white font-bold text-xl text-orange-500 text-center py-2 w-36 rounded-md my-4">Read More</div></Link>
            </div>
        </div>
    )
}
