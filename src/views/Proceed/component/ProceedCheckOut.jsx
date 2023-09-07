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
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default ProceedCheckOut;
