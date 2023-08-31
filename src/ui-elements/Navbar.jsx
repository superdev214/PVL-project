import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import ButtonOutline from "./buttons/ButtonOutline";
import { motion } from "framer-motion";
import classNames from "classnames";
const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategorySub, setIsCategorySub] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  });
  return (
    <div
      className={
        "fixed top-0 w-full z-30 bg-[#2B2B2B] transition-all " +
        (scrollActive ? " shadow-md shadow-green-600 pt-0" : " pt-2")
      }
    >
      {/* main navbar */}
      <nav>
        <div className="container mx-auto px-8 py-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-9">
              <img className="h-10 w-10" src="/assets/pvl.png" alt="Workflow" />
              <h1 className="md:text-xl font-mono lg:text-2xl font-semibold text-white leading-[140%]">
                PVL Account Shop
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/marketplace"
                  // className={
                  //   "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-[17px] text-white" +
                  //   (activeNavItem === ""
                  //     ? " text-orange-500 animation-active "
                  //     : " text-black-500 hover:text-orange-500 ")
                  // }
                  className="text-sm lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative lg:text-base text-white leading-[22.4px] font-sans font-semibold"
                >
                  MarketPlace
                </Link>
                <a
                  href="/"
                  className="text-sm lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative lg:text-base text-white leading-[22.4px] font-sans font-semibold"
                >
                  Abous Us
                </a>
                <a
                  href="/"
                  className="text-sm lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative lg:text-base text-white leading-[22.4px] font-sans font-semibold"
                >
                  Cart
                </a>
                <motion.button
                  className={classNames({
                    "px-[10px] h-[48px]": true,
                    "text-white rounded-[20px] lg:px-[30px] font-work font-semibold leading-[22px] inline-block lg:h-[60px]": true,
                  })}
                  style={{
                    background:
                      "linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                  }}
                >
                  {" "}
                  <Link to="/login">
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        transition: {
                          duration: 0.1,
                        },
                      }}
                    >
                      <motion.img
                        src="/assets/User.svg"
                        className="w-[20px] h-[20px] inline-block mr-[12px]"
                      />
                      <motion.span> Log in</motion.span>
                    </motion.div>
                  </Link>
                </motion.button>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden container mx-auto" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/marketplace"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Marketplace
                </Link>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Cart
                </a>

                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log in
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
export default Navbar;
