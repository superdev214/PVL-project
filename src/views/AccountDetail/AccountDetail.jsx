import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Icon_World from "./Icon/Icon_World";
import MoreItems from "./component/MoreItems";
import Navbar from "../../ui-elements/Navbar";
import FooterMain from "../../ui-elements/FooterMain";
const AccountDetail = (props) => {
  const { type, color1, explain } = props;
  return (
    <div>
      <Navbar />
      <div className="bg-[#2B2B2B] pt-[80px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          style={{
            background: `linear-gradient(180deg, ${color1} 0%, rgba(0, 0, 0, 0.00)`,
          }}
        >
          <img
            src={`/assets/account/${type} detail.png`}
            alt="no Img"
            className="w-full max-h-[438px] md:max-h-[420px] xl:max-h-[660px]"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            transition: {
              staggerChildren: 0.5,
              when: "beforeChildren",
            },
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="container mx-auto py-10 px-[30px]"
        >
          <div className="space-y-5 ">
            <div className="md:flex md:justify-between">
              {/* account type and date */}
              <div className="space-y-5 ">
                <div className="space-y-2.5 md:flex md:flex-col md:justify-between">
                  <div>
                    <h1
                      className="font-work text-[28px] font-semibold
             leading-[39px] text-white mb-1 capitalize md:text-[38px] xl:text-[51px]"
                    >
                      {type}
                    </h1>
                    <p className="font-work text-base font-normal leading-[22px] text-[#858584] md:mb-5 md:text-[22px]">
                      Added on Dec 07, 2022
                    </p>
                  </div>
                  <div className="hidden md:block space-y-2.5">
                    <p className="font-mono text-base leading-[22px] text-[#858584] xl:text-[22px]">
                      Sold By
                    </p>
                    <div className="flex gap-x-3">
                      <img
                        alt="noIMG"
                        src="/assets/pvl.png"
                        className="w-6 h-6"
                      />
                      <span className="font-work text-base font-normal leading-[22px] text-[#FFF] xl:text-[22px]">
                        PVL Shop
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" md:hidden space-y-2.5">
                  <p className="font-mono text-base leading-[22px] text-[#858584]">
                    Sold By
                  </p>
                  <div className="flex gap-x-3">
                    <img
                      alt="noIMG"
                      src="/assets/pvl.png"
                      className="w-6 h-6"
                    />
                    <span className="font-work text-base font-normal leading-[22px] text-[#FFF]">
                      PVL Shop
                    </span>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="rounded-[20px] bg-[#3B3B3B] px-[59px] py-[15px] space-y-[12px] text-center xl:space-y-[20px]">
                <motion.button
                  whileHover={{ scale: 1.05, color: "#f8e112" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={classNames({
                    "h-[60px] text-base": true,
                    "w-full text-white rounded-[20px] border-2 mx-auto border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-white": true,

                    "md:min-w-[235px]": true,
                  })}
                  style={{
                    background:
                      "linear-gradient(170deg, #A259FF 0%, #377DF7 100%), linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                  }}
                >
                  Add to cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, color: "#f8e112" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={classNames({
                    "h-[60px] text-base": true,
                    "w-full text-white rounded-[20px] border-2 mx-auto border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-white": true,
                    "md:min-w-[235px] block": true,
                  })}
                  style={{
                    background:
                      "linear-gradient(170deg, #A259FF 0%, #377DF7 100%), linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                  }}
                >
                  Buy now
                </motion.button>
              </div>
            </div>
            {/* description */}
            <div>
              <h1 className="#858584 font-mono text-base font-normal leading-[22px] text-[#858584] mb-2.5 xl:text-[22px] xl:font-bold">
                Description
              </h1>
              <p className="font-work text-base font-normal leading-[22px] text-white xl:text-[22px]">
                {/* {explain} */}
                Get your Netflix account for a fraction of the price! <br />
                Unlimited films, TV programs and more. <br />
                Watch anywhere. You can watch as much as you want, whenever you
                want. There's always something new to discover, and new TV
                programs and films are added every week! Watch anywhere,
                anytime. Sign in with the Netflix account sent to your email to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favorite programs with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </p>
            </div>
            <div className="space-y-3">
              <h1 className="#858584 font-mono text-base font-normal leading-[22px] text-[#858584] mb-2.5">
                Details
              </h1>
              <div className="flex gap-x-2.5">
                <Icon_World />
                <span className="font-work text-base font-normal leading-[22px] text-white">
                  Lifetime account available
                </span>
              </div>
              <div className="flex gap-x-2.5">
                <Icon_World />
                <span className="font-work text-base font-normal leading-[22px] text-white">
                  6 months account available
                </span>
              </div>
            </div>
          </div>
          <MoreItems />
        </motion.div>
      </div>
      <FooterMain />
    </div>
  );
};
export default AccountDetail;
