import React from 'react'
import WebinarPreview from '@/components/WebinarPreview'

export default async function Page() {
  const data = await fetch("http://localhost/oursite/apis/webnear.php");
  const webinars = await data.json();

  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <h1 className="text-3xl md:text-5xl font-bold my-6 text-center mb-4 col-span-1 lg:col-span-2">Our All Webinars</h1>
        {webinars.map((data,index) => {return <WebinarPreview key={index} data={data}/>})}
    </section>
  )
}
