'use client'
import React from 'react'
import Link from 'next/link'

const BacktoTopButton = () => {
  return (
    <div className='flex items-center justify-center'>
      <Link
        href={`#top`}
        className='text-lg bg-[#D6DF3D] py-4 rounded-[10px] px-8'
      >
        Back to Top.
      </Link>
    </div>
  )
}

export default BacktoTopButton;