import { useContext } from "react";
import { Link } from "react-router-dom";

import { MdHome, MdAccountCircle, MdLogout } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../utils/context";

export default function Sidemenu() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleChangeTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <div className="hidden md:block text-center lg:text-left lg:w-1/5">
      <ul className="menu bg-[#3BB3C3] dark:bg-[#2C3E50] text-white rounded-tr-xl rounded-br-xl py-8 px-4 lg:p-8 min-h-screen">
        <Link to={`/profile`}>
          <li className="lg:hidden">
            <MdAccountCircle size={30} />
          </li>
          <li className="hidden lg:block">
            <MdAccountCircle size={40} className="inline" /> Fullname
          </li>
        </Link>
        <Link to={"/"}>
          <li className="my-4 lg:hidden">
            <MdHome size={30} />
          </li>
          <li className="my-4 hidden lg:block">
            <MdHome size={40} className="inline" /> Home
          </li>
        </Link>
        <li className="mb-4 lg:hidden">
          <button type="button" className="p-1 rounded-full">
            {theme === "light" ? (
              <FaMoon
                color="dark"
                size={25}
                onClick={() => handleChangeTheme("dark")}
              />
            ) : (
              <FaSun
                color="white"
                size={25}
                onClick={() => handleChangeTheme("light")}
              />
            )}
          </button>
        </li>
        <li className="mb-4 hidden lg:block">
          <button type="button" className="p-1 rounded-full">
            {theme === "light" ? (
              <FaMoon size={30} onClick={() => handleChangeTheme("dark")} />
            ) : (
              <FaSun size={30} onClick={() => handleChangeTheme("light")} />
            )}
            <span className="mx-2">
              {theme === "light" ? " Light Mode" : " Dark Mode"}
            </span>
          </button>
        </li>
        <Link to={"/login"}>
          <li className="lg:hidden">
            <MdLogout size={30} />
          </li>
          <li className="hidden lg:block">
            <MdLogout size={40} className="inline" /> Logout
          </li>
        </Link>
      </ul>
    </div>
  );
}
