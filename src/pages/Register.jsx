import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

import Logo from "../asset/logo-inline.png"
import Button from "../components/Button";
import CustomInput from '../components/CustomInput';

import { apiRequest } from "../utils/apiRequest"

const Register = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if(firstName && lastName && username && email && password && birthdate){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [firstName, lastName, username, email, password, birthdate]);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const body = {
            firstname: firstName,
            lastname: lastName,
            username,
            email,
            password,
            birthdate,
        };
        apiRequest("users", "post", body)
          .then((res) => {
            console.log(res);
            const { message } = res;
            if (message) {
              navigate("/login");
            }
            alert(message);
          })
          .catch((err) => {
            const { message } = err.response;
            alert(message);
          })
          .finally(() => setLoading(false));
      };

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
                        <form>
                            <CustomInput 
                            ptext="First Name"
                            id="input-firstName"
                            type="text"
                            placeholder="Jack"
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                            <CustomInput 
                            ptext="Last Name"
                            id="input-lastName"
                            type="text"
                            placeholder="Sparrow"
                            onChange={(e) => setLastName(e.target.value)}
                            />
                            <CustomInput 
                            ptext="User Name"
                            id="input-userName"
                            type="text"
                            placeholder="jacks345"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <CustomInput 
                            ptext="Email"
                            id="input-email"
                            type="email"
                            placeholder="jacks@alterra.id"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <CustomInput 
                            ptext="Password"
                            id="input-password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <CustomInput 
                            ptext="Birth Date"
                            id="input-birthdate"
                            type="date"
                            placeholder=""
                            onChange={(e) => setBirthdate(e.target.value)}
                            />
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
                            <Link to={"/login"}><p className="text-white text-xs cursor-pointer sm:text-black">Login Now</p></Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Register