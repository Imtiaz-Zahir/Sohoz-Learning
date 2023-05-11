import React from 'react'
import WebinarPreview from './WebinarPreview'

export default function Webinars() {
  return (
    
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {<><WebinarPreview/><WebinarPreview/><WebinarPreview/><WebinarPreview/><WebinarPreview/><WebinarPreview/></>}
    </section>
    
  )
}
