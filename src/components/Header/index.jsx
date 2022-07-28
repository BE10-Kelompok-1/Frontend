import { Fragment, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import {
  MdHome,
  MdSettings,
  MdAccountCircle,
  MdLogout,
  MdChevronLeft,
} from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../utils/context";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const handleChangeTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <div className="h-10 md:hidden mx-0 my-auto py-1 px-4">
      {pathname === "/" ? (
        <div className="flex justify-between items-center">
          <MdHome size={30} />
          <button type="button" className="p-1 rounded-full">
            {theme === "light" ? (
              <FaMoon
                color="dark"
                size={20}
                onClick={() => handleChangeTheme("dark")}
              />
            ) : (
              <FaSun
                color="white"
                size={20}
                onClick={() => handleChangeTheme("light")}
              />
            )}
          </button>
          <Menu
            as="div"
            className="relative inline-flex items-center text-left"
          >
            <Menu.Button>
              <MdSettings size={30} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 top-8 w-auto rounded-md shadow-lg z-50 bg-white">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/profile"}
                        className={`${
                          active
                            ? "bg-[#F3B405] dark:bg-white text-white dark:text-black"
                            : "text-black dark:text-white"
                        } group flex w-full items-center rounded-md px-1 py-2 text-sm`}
                      >
                        <MdAccountCircle size={20} className="mx-1" /> Profile
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/login"}
                        className={`${
                          active
                            ? "bg-[#F3B405] dark:bg-white text-white dark:text-black"
                            : "text-black dark:text-white"
                        } group flex w-full items-center rounded-md px-1 py-2 text-sm`}
                      >
                        <MdLogout size={20} className="mx-1" /> Logout
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center font-bold text-xl ">
            <MdChevronLeft
              size={30}
              className="inline-block"
              onClick={() => navigate(-1)}
            />
            <span className="text-white">Profile</span>
          </div>
        </div>
      )}
    </div>
  );
}
