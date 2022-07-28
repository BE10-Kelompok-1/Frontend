import React from 'react'
import { MdSend } from "react-icons/md";

export default function inputComment() {
  return (
    <div className='flex flex-row justify-around'>
        <input type="text" className='mx-auto bg-[#bdc3c7] w-11/12 rounded-full py-1 dark:text-black' placeholder='Write your comment...' />
        <button><MdSend size={20} /></button>
    </div>
  )
}
