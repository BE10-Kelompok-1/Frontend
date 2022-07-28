import React from 'react'
import { MdAccountCircle } from "react-icons/md";

export default function Comment() {
  return (
    <div className='ml-3 w-fit h-fit flex flex-row items-center mb-3'>
        <MdAccountCircle size={50} />
        <div className='ml-4 bg-[#bdc3c7] p-2 rounded-xl'>
            <h2 className='font-semibold dark:text-black'>Gaten Materazzo</h2>
            <p className='dark:text-black'>COOL !</p>
        </div>
    </div>
  )
}
