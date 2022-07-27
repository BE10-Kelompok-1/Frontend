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
                        <h1 className='text-white font-semibold text-2xl mx-auto sm:hidden'>Sign Up</h1>
                        <h2 className='text-white text-sm opacity-70 mx-auto mb-6 sm:hidden'>Its easier to register now</h2>
                        <form action="">
                          <p className='text-sm text-white sm:text-black'>First Name</p>
                          <input type="text" placeholder="Jack" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <p className='text-sm text-white sm:text-black'>Last Name</p>
                          <input type="text" placeholder="Sparrow" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <p className='text-sm text-white sm:text-black'>User Name</p>
                          <input type="text" placeholder="jacks345" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <p className='text-sm text-white sm:text-black'>Email</p>
                          <input type="email" placeholder="jacks@alterra.id" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <p className='text-sm text-white sm:text-black'>Password</p>
                          <input type="text" placeholder="Enter Password" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <p className='text-sm text-white sm:text-black'>Birth Date</p>
                          <input type="date" placeholder="First Name" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                          <div className='flex flex-row justify-around mt-7 sm:justify-center'>
                          <input type="checkbox" className='mr-2' />
                          <p className='text-white text-sm opacity-70 sm:text-black'>I accept the policy and terms</p>
                          </div>
                          <div className='flex flex-row items-center justify-center'>
                          <Button kelas={"bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40 mt-7 sm: rounded w-32"} label="Sign Up" />
                          </div>
                        </form>
                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-blue-500 text-xs">Have an account?</p>
                            <p className="text-white text-xs sm:text-black">Login Now</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}
