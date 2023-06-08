import React from 'react'
import Image from 'next/image';

export default function Team() {
  return (
    <div className="container bg-[#23262c] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.60)] mx-auto rounded-[20px] w-[600px] mt-5 px-5 py-10 ">
      <h2 className='ml-[220px] mb-5'>D E V  T E A M - 0 2</h2>
      <div className='ml-[130px]'>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/kako.png"
            width={100}
            height={100}
            className=""
            alt="logo"
          />
          <div className="font-medium dark:text-white">
            <div>Jefferson Pessoa</div>
            <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202208291228 </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/madu.jpeg"
            width={100}
            height={100}
            className="rounded-full"
            alt="logo"
          />
          <div className="font-medium dark:text-white">
            <div>Amanda Duque</div>
            <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202209170254</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/andre.jpeg"
            width={100}
            height={100}
            className="rounded-full"
            alt="logo"
          />
          <div className="font-medium dark:text-white">
            <div>Andre Luiz</div>
            <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/nelson.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="logo"
          />
          <div className="font-medium dark:text-white">
            <div>Nelson Carvalho</div>
            <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202208353568</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/marcos.jpeg"
            width={100}
            height={100}
            className="rounded-full"
            alt="logo"
          />
          <div className="font-medium dark:text-white">
            <div>Marcos Barozzi </div>
            <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202211381232</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/greg.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="logo"
          />
          <div className="font-medium dark:text-white">
            <div>Hemerson Gregorio </div>
            <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202209084986</div>
          </div>
        </div>
      </div>
    </div>
  )
}
