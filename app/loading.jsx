import React from 'react'
import Image from 'next/image'

export default function loading() {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center'><Image src="/loading.gif" width={200} height={200}/></div>
    )
}
