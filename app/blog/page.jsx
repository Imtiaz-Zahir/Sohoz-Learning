import React from 'react'
import BlogPreview from '@/components/BlogPreview'

export default function page() {
  return (
    <div className="lg:w-2/3">
      {<><BlogPreview/><BlogPreview/><BlogPreview/></>}
    </div>
  )
}
