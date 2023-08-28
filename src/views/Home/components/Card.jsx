import React from "react";
import { motion } from "framer-motion";
const Card = (props) => {
  const { imgSrc, title, explain } = props;
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="bg-[#3B3B3B] p-5 sm:px-10 rounded-[20px] flex gap-x-5 md:flex-col md:text-center md:gap-y-5 hover:border-2 hover:border-orange-700"
      >
        <div className="w-full object-none md:mx-auto max-w-[100px] lg:w-[160px] lg:min-w-[160px] xl:min-w-[250px] ">
          <img
            alt="no IMG"
            src={`./assets/${imgSrc}.png`}
            className="w-full object-none xl:object-fill mx-auto accountIcon lg:hidden"
          />
          <img
            alt="no IMG"
            src={`./assets/${imgSrc}-160.png`}
            className="w-full object-none xl:object-fill mx-auto accountIcon hidden lg:block xl:hidden"
          />
          <img
            alt="no IMG"
            src={`./assets/${imgSrc}-250.png`}
            className="w-full object-none xl:object-fill mx-auto accountIcon hidden xl:block"
          />
        </div>
        <div className="space-y-[10px] self-center">
          <h1 className="text-white text-base font-work font-semibold leading-[22.4px] sm:text-lg xl:text-[22px] md:text-base">
            {title}
          </h1>
          <h2 className="font-work text-base font-normal leadding-[22.4px] text-white sm:text-lg xl:text-[22px] md:text-base">
            {explain}
          </h2>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
