import React from 'react'
import Image from 'next/image'

export default function Login() {
  return (
    <div className="min-h-[50vh] flex items-center">
      <div className="container bg-[#23262c] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.60)] mx-auto rounded-[20px] w-9/12 mt-5 px-10 py-10">
        <Image
          className='mx-auto'
          src="/logoestacio.png"
          alt="Logo"
          width={400} height={400}
        />


        <p className="text-[20px] text-center text-white mt-10">
          Projeto Front-end Com Framework e Crud</p>
        <p className="text-[20px] text-center text-white mt-2 mb-5">
          Missão Certificação - Mundo 2</p>
        
      </div>
    </div>

  )
}

