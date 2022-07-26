import React from "react";
import Logo from "../asset/logo-inline.png"
import Logo2 from "../asset/logo.png"
import Button from "../components/Button";
import Layout from "../components/Layout";

const Login = () => {
    return(
        <Layout>
            <div className="flex align-items:center w-full min-h-screen bg-cover bg-[url('../asset/loginpage-bg.jpeg')]">
                <div className="w-8/12 m-auto flex justify-between">
                    <div className="hidden w-1/2 sm:block mt-20 2xl:scale-150">
                        <img src={Logo} alt="kongkow app" className="w-80" />
                        <h2 className="text-3xl font-semibold text-white">helps you connect and share 
    with the people in your life</h2>
                    </div>
                    <div className="p-6 rounded-2xl bg-transparent h-auto w-80 flex flex-col sm:bg-white 2xl:scale-150">
                        <img src={Logo2} alt="kongkow app" className="visible w-40 mx-auto sm:hidden" />
                        <input type="text" placeholder="Username" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3" />
                        <input type="password" placeholder="Password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" />
                        <Button kelas={"bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40 mx-auto mt-3 sm:w-full rounded"} label="Sign In" />
                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-blue-500 text-xs sm:w-full text-right">forgot password?</p>
                            <p className="text-white text-xs sm:hidden">Create an account</p>
                        </div>
                        <hr className="hidden sm:block" />
                        <Button kelas={"hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mx-auto mt-3 sm:block"} label="Sign Up" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login