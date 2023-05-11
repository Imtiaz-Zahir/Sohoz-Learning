import React from 'react'
import BlogPreview from './BlogPreview'
import Aside from './Aside'

export default function Blogs() {
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 lg:flex lg:justify-between">
        <div className="lg:w-2/3">
            {<><BlogPreview/><BlogPreview/><BlogPreview/></>}
        </div>
        {<Aside/>}
    </section>
    )
}
