import React from "react";

const Button = ({kelas,label}) => {
    return(
        <button className={kelas}>{label}</button>
    )
}

export default Button