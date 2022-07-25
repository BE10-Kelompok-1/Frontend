import React from "react";
import Logo from "../asset/logo.png"
import Button from "../components/Button";
import Layout from "../components/Layout";

const Login = () => {
    return(
        <Layout><div className="wadah w-full">
            <div className="login-page">
                <div className="description">
                    <img src={Logo} alt="kongkow" />
                    <h2>helps you connect and share 
    with the people in your life</h2>
                </div>
                <div className="login-page-form">
                    <img src={Logo} alt="kongkow" />
                    <h1>Sign In</h1>
                    <h2>Welcome back !</h2>
                    <form action="">
                        <p>USERNAME</p>
                        <input type="text" placeholder=" jacksparrow" id="username" />
                        <p>PASSWORD</p>
                        <input type="password" placeholder=" Enter Password" id="password" />
                        <div className="unregistered">
                            <p>Not registered?</p>
                            <p>Create an account</p>
                        </div>
                        <Button label="Sign In" />
                    </form>
                </div>
            </div>
        </div></Layout>
    )
}

export default Login