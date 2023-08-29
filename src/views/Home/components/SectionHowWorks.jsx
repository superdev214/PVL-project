import React, { useMemo, useEffect } from "react";
import Card from "./Card";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const cardItems = [
  {
    imgSrc: "Pvl-Icon",
    title: "Register to PVL",
    explain: "Register or log in into PVL Shop",
  },
  {
    imgSrc: "Account-Icon",
    title: "Explore accounts",
    explain: "Explore and find the accounts you want",
  },
  {
    imgSrc: "Buy-Account-Icon",
    title: "Buy account you want!",
    explain: "Buy the account you want for cheap!",
  },
];
const SectionHowWorks = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper>
      <div className="bg-[#2B2B2B] border-none">
        <motion.div variants={scrollAnimation} className="container mx-auto px-8 py-10 space-y-10 md:px-12 xl:px-[130px] 2xl:px-[195px]">
          <div className="space-y-2.5 mb-10">
            <h1 className="font-work text-[28px] font-semibold leading-[39px] text-white">
              How It Works
            </h1>
            <p className="text-base text-white font-work leading-[22px]">
              Find out how to get started
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-[30px]">
            {cardItems.map((item, id) => {
              console.log(item);
              return (
                <Card
                  key={id}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  explain={item.explain}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default SectionHowWorks;
