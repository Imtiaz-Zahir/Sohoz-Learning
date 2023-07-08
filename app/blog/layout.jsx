import React from 'react'
import Aside from '@/components/Aside'

export default function layout({ children }) {
  return (
    <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 lg:flex lg:justify-between">
        {children}
        <Aside/>
    </section>
  )
}
