import React from 'react'
import Image from 'next/image';
import Link from 'next/link'


export default function Header() {
  return (
    <>
      <div className='flex justify-between w-[100%] p-[20px]'>
      <Link href="/" className="pointer">
        <Image
          src="/Tasks.svg"
          width={100}
          height={100}
          className=""
          alt="logo"/>
      </Link>
      <Link href="/team"> 
      <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 dark:bg-transparent border dark:hover:bg-purple-800 dark:focus:ring-purple-900">Team</button>
      </Link>
      </div>
    </>
  )
}
