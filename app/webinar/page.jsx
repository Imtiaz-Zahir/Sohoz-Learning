import React from 'react'
import WebinarPreview from '@/components/WebinarPreview'

export default function page() {
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <h1 className="text-3xl md:text-5xl font-bold my-6 text-center mb-4 col-span-1 lg:col-span-2">Our All Webinars</h1>
        {<><WebinarPreview/><WebinarPreview/><WebinarPreview/><WebinarPreview/><WebinarPreview/><WebinarPreview/></>}
    </section>
  )
}
