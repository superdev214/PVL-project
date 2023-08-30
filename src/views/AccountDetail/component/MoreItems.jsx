import AccountTypeCard from "../../Marketplace/component/AccountTypeCard";
import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import classNames from "classnames";
const fakeAccountList = [
  {
    type: "netflix",
    life_price: 1.63,
    six_months_price: 0.33,
  },
  {
    type: "spotify",
    life_price: 1.63,
    six_months_price: 0.33,
    color1: "rgba(30, 215, 96, 0.50)",
  },
  {
    type: "crunchyroll",
    life_price: 5.0,
    six_months_price: 0,
    color1: "rgba(255, 141, 14, 0.50)",
  },
];
const MoreItems = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation} className="py-10 bg-[#2B2B2B]">
        <div className="mb-[30px] md:flex md:justify-between">
          <h1 className="text-[28px] font-work font-semibold leading-[39px] text-white">
            More Items
          </h1>
          <motion.button
            whileHover={{ color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={classNames({
              "hidden h-[60px] text-base px-[50px]": true,
              "text-white rounded-[20px] border-2 border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-[#2B2B2B]": true,
              "pvl-btn md:block": true,
            })}
          >
            {" "}
            <img
              src="/assets/account/arrowright.svg"
              className="w-[20px] h-[20px] inline-block mr-[12px]"
            />
            Go To Explore Page
          </motion.button>
        </div>
        <div className="grid grid-cols-1 gap-y-[30px] md:grid-cols-2 xl:grid-cols-3 md:gap-[30px]">
          {fakeAccountList.map((item, index) => {
            return (
              <AccountTypeCard
                key={item.type}
                type={item.type}
                life_price={item.life_price}
                six_months_price={item.six_months_price}
                color1={item.color1}
              />
            );
          })}
          <motion.button
            whileHover={{ color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={classNames({
              "h-[60px] text-base": true,
              "w-full text-white rounded-[20px] border-2 border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-[#2B2B2B]": true,
              "pvl-btn md:hidden": true,
            })}
          >
            {" "}
            <img
              src="/assets/account/arrowright.svg"
              className="w-[20px] h-[20px] inline-block mr-[12px]"
            />
            Go To Explore Page
          </motion.button>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default MoreItems;
