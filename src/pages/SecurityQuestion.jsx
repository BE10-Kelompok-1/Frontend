import React from 'react'
import { useNavigate, Link } from "react-router-dom";

import Logo from "../asset/logo-inline.png"
import Logo2 from "../asset/logo.png"
import Button from "../components/Button";

export default function Register() {

  const navigate = useNavigate();

  return (
            <div className="flex align-items:center w-full min-h-screen bg-cover bg-[url('../asset/loginpage-bg.jpeg')]">
                <div className="w-8/12 m-auto flex justify-between mt-10 sm:mt-32 mb-20">
                    <div className="hidden w-1/2 sm:block mt-32 2xl:scale-150">
                        <img src={Logo} alt="kongkow app" className="w-80" />
                        <h2 className="text-3xl font-semibold text-white">helps you connect and share 
    with the people in your life</h2>
                    </div>
                    <div onSubmit={(e) => handleSubmit(e)} className="p-6 rounded-2xl bg-transparent h-auto w-80 flex flex-col sm:bg-white 2xl:scale-150">
                        <h1 className='text-white font-semibold text-2xl mx-auto sm:text-black'>Security Question</h1>
                        <h2 className='text-center text-white text-sm opacity-70 mx-auto mb-6 sm:text-black'>Answer the 2 questions below. These questions will help us verify your identity should you forget your password</h2>
                        <form action="">
                          <p className='text-sm text-white sm:text-black'>What is your childhood name ?</p>
                          <input id='question-1' type="text" placeholder="Your answer..." className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <p className='text-sm text-white sm:text-black'>What is your first phone ?</p>
                          <input id='question-2' type="text" placeholder="Your answer..." className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <div className='flex flex-row items-center justify-center'>
                          <Button kelas={"bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40 mt-3 sm: rounded w-32"} label="Next" />
                          </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}
