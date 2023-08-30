import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
const effect = {
  offscreen: { rotate: 90 },
  onscreen: {
    rotate: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
const itemA = {
  offscreen: { scale: 0, top: 100, opacity: 0 },
  onscreen: { scale: 1, top: 30, opacity: 1 },
};

const itemB = {
  offscreen: { scale: 0, top: 200 },
  onscreen: { scale: 1, top: 80 },
};

const AccountDetilCard = (props) => {
  const { type, life_price, six_months_price, color1 } = props;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper>
      <motion.div
        layoutId="news"
        variants={effect}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className=" rounded-[20px] bg-[#3B3B3B] overflow-hidden hover:cursor-pointer relative"
      >
        <motion.div
          variants={itemA}
          style={{
            background: `linear-gradient(180deg, ${color1} 0%, rgba(0, 0, 0, 0.00)`,
          }}
        >
          <img
            src={`/assets/account/${type}.png`}
            alt="no Img"
            className="w-full max-h-[438px] xl:max-h-[293px] md:max-h-[256px] 2xl:max-h-[356px]"
          />
        </motion.div>
        <motion.div
          variants={itemB}
          className="container mx-auto p-5 space-y-6"
        >
          <div>
            <h1
              className="font-work text-[22px] font-semibold
             leading-[30px] text-white mb-1 capitalize"
            >
              {type}
            </h1>
            <div className="flex gap-x-3">
              <img alt="noIMG" src="/assets/pvl.png" className="w-6 h-6" />
              <span className="font-mono text-base font-normal leading-[22px] text-[#FFF]">
                PVL Shop
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <h4 className="text-[#858584] font-mono text-sm">
                {six_months_price !== 0 ? "Price lifetime" : "Lifetime only"}
              </h4>
              <p className="text-white font-mono text-sm font-normal leading-[13px]">
                ${life_price}
              </p>
            </div>
            {six_months_price !== 0 && (
              <div className="space-y-2">
                <h4 className="text-[#858584] font-mono text-sm">
                  Price 6 months
                </h4>
                <p className="text-white font-mono text-sm font-normal leading-[13px]">
                  {six_months_price} $
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default AccountDetilCard;
