import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import {BsFillCameraFill} from "react-icons/bs"

import Button from "../components/Button";

export default function () {
  return (
        <form className='w-11/12 h-36 mx-auto bg-white relative top-4 rounded-xl z-2 shadow-md sm:w-9/12'>
            <div className='flex flex-row justify-evenly items-center sm:flex-none'>
                <div className='flex flex row items-center sm:flex-none w-full px-3.5'>
                    <MdAccountCircle size={50} />
                    <textarea class="textarea relative top-4 w-64 ml-2 text-xl sm:w-full" placeholder="What's on your mind ?"></textarea>
                </div>
                <BsFillCameraFill size={30} className={"cursor-pointer visible sm:hidden"} />
            </div>
            <div className='w-full flex flex-row justify-end mt-7'>
                <BsFillCameraFill size={30} className={"hidden sm:block mr-5 cursor-pointer"} />
                <Button kelas={"bg-yellow-500 py-1 hover:bg-blue-700 text-white font-bold rounded-full w-24 mr-5"} label="Post" />
            </div>
        </form>
  )
}
