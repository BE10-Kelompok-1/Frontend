import React from 'react'
import {useRef, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { reduxAction } from "../utils/redux/actions/action"
import { MdAccountCircle } from "react-icons/md";
import {BsFillCameraFill} from "react-icons/bs"
import { apiRequest } from '../utils/apiRequest';
import Button from "../components/Button";

export default function () {

    const inputRef = useRef(null);

    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
      };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        console.log('fileObj is', fileObj);
    
        // 👇️ reset file input
        event.target.value = null;
    
        // 👇️ is now empty
        console.log(event.target.files);
    
        // 👇️ can still access file object here
        console.log(fileObj);
        console.log(fileObj.name);
      };
    

  return (
        <form className='w-11/12 h-36 mx-auto bg-white relative top-4 rounded-xl z-2 shadow-md mb-10 sm:w-9/12 dark:bg-[#2c3e50]'>
            <div className='flex flex-row justify-evenly items-center sm:flex-none'>
                <div className='flex flex row items-center sm:flex-none w-full px-3.5'>
                    <MdAccountCircle size={50} />
                    <textarea id='input-caption' className="textarea relative top-4 w-64 ml-2 text-xl sm:w-full dark:bg-[#2c3e50]" placeholder="What's on your mind ?"></textarea>
                </div>
                <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                />
                <button onClick={handleClick}><BsFillCameraFill size={40} className={"pr-3 cursor-pointer visible sm:hidden"} /></button>
            </div>
            <div className='w-full flex flex-row justify-end mt-7'>
                <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                />
                <button onClick={handleClick}><BsFillCameraFill size={30} className={"hidden sm:block mr-5 cursor-pointer"} /></button>
                <Button kelas={"bg-yellow-500 py-1 hover:bg-blue-700 text-white font-bold rounded-full w-24 mr-5 dark:bg-white text-black"} label="Post" />
            </div>
        </form>
  )
}
