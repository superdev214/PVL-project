import React from "react";
import { motion } from "framer-motion";
import "./effect.css";
import "./effect.js"
const SellingAccount = (props) => {
  const { avatar,type, order, price, i } = props;
  return (
    <>
      <motion.div className=" p-5 flex gap-x-5 bg-[#3B3B3B] rounded-[20px] relative xl:block xl:space-y-5 border-2 hover:border-orange-500 hover:shadow-orange-700 hover:cursor-pointer">
        <img
          alt="noIMG"
          src={`https://wsrv.nl/?url=${process.env.REACT_APP_BASE_URL}/${avatar}`}
          className="w-[60px] h-[60px] lg:min-w-[60px] lg:min-h-[60px] object-cover xl:w-[120px] xl:h-[120px] xl:m-auto"
        />
        <div className="absolute rounded-full bg-[#2B2B2B] p-1 text-[#858584] font-mono text-base w-[30px] text-center h-[30px] py-auto left-[12px] top-[13px] xl:left-[20px] xl:top-0">
          {order}
        </div>
        <div className="space-y-[5px] w-full xl:text-center">
          <h2 className="font-work font-semibold leading-[31px] capitalize text-[22px] text-white">
            {type}
          </h2>
          <div className="grid grid-cols-2 xl:flex xl:text-center xl:justify-center">
            <h5 className="text-[#858584] text-base font-work font-normal leading-[22px] xl:text-right">
              Starts From:
            </h5>
            <h5 className="text-base font-mono font-normal leading-[22px] text-white xl:text-left">
              ${price}. 00
            </h5>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SellingAccount;
