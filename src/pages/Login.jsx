import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { reduxAction } from "../utils/redux/actions/action";
import Logo from "../asset/logo-inline.png"
import Logo2 from "../asset/logo.png"
import Button from "../components/Button";
import CustomInput from '../components/CustomInput';
import { apiRequest } from "../utils/apiRequest";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (username && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [username, password]);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const body = {
          username,
          password,
        };
        apiRequest("login", "post", body)
          .then((res) => {
            const { token } = res.token;
            localStorage.setItem("token", token);
            dispatch(reduxAction("IS_LOGGED_IN", true));
            alert(res.message);
            navigate("/");
          })
          .catch((err) => {
            const { data } = err.response;
            alert(data.message);
          })
          .finally(() => setLoading(false));
      };

    return(
            <div className="flex align-items:center w-full min-h-screen bg-cover bg-[url('../asset/loginpage-bg.jpeg')]">
                <div className="w-8/12 m-auto flex justify-between">
                    <div className="hidden w-1/2 sm:block mt-20 2xl:scale-150">
                        <img src={Logo} alt="kongkow app" className="w-80" />
                        <h2 className="text-3xl font-semibold text-white">helps you connect and share 
    with the people in your life</h2>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className="p-6 rounded-2xl bg-transparent h-auto w-80 flex flex-col sm:bg-white 2xl:scale-150">
                        <img src={Logo2} alt="kongkow app" className="visible w-40 mx-auto sm:hidden" />
                        <CustomInput 
                            ptext="User Name"
                            id="input-userName"
                            type="text"
                            placeholder="input username"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        <CustomInput 
                            ptext="Password"
                            id="input-password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <Button kelas={"bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40 mx-auto mt-3 sm:w-full rounded"} label="Sign In" />
                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-blue-500 text-xs sm:w-full text-right">forgot password?</p>
                            <Link to={"/register"}><p className="text-white text-xs sm:hidden">Create an account</p></Link>
                        </div>
                        <hr className="hidden sm:block" />
                        <Button kelas={"hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mx-auto mt-3 sm:block"} label="Sign Up" />
                    </form>
                </div>
            </div>
    )
}

export default Login