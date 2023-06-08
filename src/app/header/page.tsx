import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className='w-[100%] p-[20px]'>
      <Image
        src="/Tasks.svg"
        width={100}
        height={100}
        className=""
        alt="logo"
      />
      
      </div>
    </>
  )
}
