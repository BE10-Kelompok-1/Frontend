import { Fragment } from "react";
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

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-10 md:hidden mx-0 my-auto py-1 px-4">
      {location.key === "default" ? (
        <div className="flex justify-between items-center">
          <MdHome size={30} />
          <FaMoon size={20} />
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
              <Menu.Items className="absolute right-0 top-8 w-auto rounded-md shadow-lg">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/profile"}
                        className={`${
                          active ? "bg-[#F3B405] text-white" : "text-gray-900"
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
                      <button
                        className={`${
                          active ? "bg-[#F3B405] text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-1 py-2 text-sm`}
                      >
                        <MdLogout size={20} className="mx-1" /> Logout
                      </button>
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
