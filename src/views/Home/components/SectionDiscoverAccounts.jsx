import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import ButtonOutline from "../../../ui-elements/buttons/ButtonOutline";

const SectionDiscoverAccount = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation} className="bg-[#2B2B2B] mt-16">
        <div className="container mx-auto py-10 md:py-[80px] w-full grid md:grid-cols-2 gap-x-[30px] px-8  md:px-12 xl:px-[130px] 2xl:px-[195px] ">
          <div className="grid grid-cols-1 gap-y-[40px] lg:gap-y-[40px] min-w-[315px] md:min-w-[330px] md:gap-y-[20px] xl:max-w-[510px] ">
            <div>
              <h1 className="font-work text-[28px] leading-[39px] mb-[10px] lg:leading-[74px] text-white md:mb-5 font-semibold md:text-[38px] md:leading-[45px] xl:text-[67px]">
                Discover & Buy Digital Accounts
              </h1>
              <p className="text-white font-work leading-[35px] text-base lg:text-[22px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod sodales neque et porta. Donec ut diam dignissim
              </p>
            </div>
            <div className="md:hidden min-w-[315px]">
              <img
                src="/assets/Account-type.png"
                alt="noIMG"
                className="w-full"
              />
            </div>
            <div className="flex">
              <ButtonOutline
                type="secondary"
                content="Get Started"
                userClass="w-full"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="mark-sale mx-2">
                <h1 className="font-mono font-bold leading-[39px] text-[28px] text-white">
                  240k +
                </h1>
                <span className="font-work text-2xl leading-[38px] text-white">
                  Total Sale
                </span>
              </div>
              <div className="mark-type">
                <h1 className="font-mono font-bold leading-[39px] text-[28px] text-white">
                  240k +
                </h1>
                <span className="font-work text-2xl leading-[38px] text-white">
                  Account Types
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block xl:max-w-[510px] md:min-w-[330px]">
            <img
              src="/assets/Account-type.png"
              alt="noIMG"
              className="w-full"
            />
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default SectionDiscoverAccount;
