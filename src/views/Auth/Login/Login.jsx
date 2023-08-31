import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import classNames from "classnames";
import getUserAnimation from "../../../utils/getUserAnimation";
import { Link } from "react-router-dom";

const variants = {
  onscreen: { opacity: 1, x: "0" },
  offscreen: { opacity: 0, x: "-100%" },
};
const variants_items = {
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  offscreen: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const variants_parents = {};
const Login = () => {
  const scrollAnimation = useMemo(() => getUserAnimation(), []);
  return (
    <div>
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="bg-[#2B2B2B]">
          <div className="container pt-[80px] mx-auto px-[30px] md:grid md:grid-cols-2 md:gap-x-10">
            <motion.img
              variants={variants_items}
              src="./assets/PLV-login-mobile.png"
              className="w-full md:hidden"
            />
            <motion.img
              variants={variants_items}
              src="./assets/PLV-login-md.png"
              className="w-full hidden md:block xl:hidden my-auto"
            />
            <motion.img
              variants={variants_items}
              src="./assets/PLV-login-xl.png"
              className="w-full hidden xl:block my-auto"
            />
            <div>
              {/* header */}
              <motion.div
                variants={variants}
                className="my-[30px] md:max-w-[330px] xl:max-w-[460px]"
              >
                <h1 className="mb-5 text-white font-work text-[38px] font-normal leading-[46px] xl:text-[51px] xl:leading-[56px]">
                  Login to your account
                </h1>
                <p className="font-work text-base font-normal leading-[22px] text-white xl:text-[22px] xl:leading-[35px] capitalize">
                  Log in to your account to start buying online accounts for a
                  fraction of the price!
                </p>
              </motion.div>
              <form className="pb-10 md:max-w-[330px] xl:min-w-[330px] space-y-[15px] flex flex-col">
                <motion.div
                  variants={variants_items}
                  className="flex items-center text-lg"
                >
                  <svg
                    className="absolute ml-3"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0001 13.1244C8.57374 13.1244 7.17251 13.4999 5.93728 14.2131C4.70205 14.9264 3.67634 15.9522 2.96327 17.1875C2.79071 17.4865 2.40848 17.5889 2.10953 17.4164C1.81058 17.2438 1.70812 16.8616 1.88068 16.5626C2.70345 15.1373 3.88696 13.9536 5.31223 13.1306C6.7375 12.3077 8.3543 11.8744 10.0001 11.8744C11.6459 11.8744 13.2627 12.3077 14.688 13.1306C16.1132 13.9536 17.2968 15.1373 18.1195 16.5626C18.2921 16.8616 18.1896 17.2438 17.8907 17.4164C17.5917 17.5889 17.2095 17.4865 17.0369 17.1875C16.3239 15.9522 15.2982 14.9264 14.0629 14.2131C12.8277 13.4999 11.4265 13.1244 10.0001 13.1244Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  <input
                    type="text"
                    id="inputUsername"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black "
                    placeholder="Username or Email"
                  />
                </motion.div>
                <motion.div
                  variants={variants_items}
                  className="flex items-center text-lg "
                >
                  <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z"
                      fill="#BDBDBD"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    className="bg-white pl-12 py-2 md:py-4 focus:outline-none w-full rounded-[20px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-black"
                    placeholder="Password"
                  />
                </motion.div>
                <motion.button
                  variants={variants}
                  className={classNames({
                    "h-[60px] text-[22px] !mt-[30px]": true,
                    "w-full text-white rounded-[20px] border-2 border-[#A259FF] px-[50px] font-work font-semibold leading-[22px]": true,
                    "pvl-btn": true,
                    "w-full": true,
                  })}
                  style={{
                    background:
                      "linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                  }}
                >
                  Log in
                </motion.button>
                <motion.span
                  variants={variants}
                  className="text-white font-work text-[14px] leading-[20px] font-normal mt-4 md:mt-[28px] md:text-sm xl:!mt-[39px] px-2"
                >
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span className="text-[#A259FF]">Sign up here!</span>
                  </Link>
                </motion.span>
              </form>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};
export default Login;
