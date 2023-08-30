import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const ProceedCheckOut = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper>
      <motion.div
        variants={scrollAnimation}
        className="bg-[#2B2B2B] pt-[80px] pb-10"
      >
        <div className="container mx-auto px-[30px] my-10 space-y-[30px]">
          <h1 className="font-work text-[28px] font-semibold leading-[39px] capitalize space-y-[10px] text-white md:text-[38px] md:leading-[46px] xl:text-[51px] xl:leading-[56px]">
            Proceed to Checkout
            <br />
            <span className="text-base font-normal leading-[22px] xl:text-[22px] xl:leading-[35px]">
              Secure checkout sample text - all transactions are processed
              safely and encrypted etc
            </span>
          </h1>
          <form className="w-full">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for the one you want"
                className="w-full py-3 pl-5 pr-4 text-[#858584] text-base font-work rounded-[20px] outline-none bg-[#3B3B3B]  focus:outline-none placeholder:text-base h-[60px]"
              />
            </div>
          </form>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default ProceedCheckOut;
