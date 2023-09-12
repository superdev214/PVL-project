import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { sendAccountInfo } from "../../../redux/reducer/userSlice";

const PaymentForm = (props) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.userState);
  const handleWithProceed = () => {
    dispatch(sendAccountInfo({email:email}));
  };
  const { price } = props;
  return (
    <>
      <div
        className="rounded-[25px] border-2 border-dashed border-[#7B61FF] px-[46px] py-2.5 text-center mb-[26px] md:flex md:gap-x-[60px] "
        style={{
          background: `linear-gradient(180deg, rgba(123, 97, 255, 0.2) 0%, rgba(255, 255, 255, 0)`,
        }}
      >
        <form>
          <div>
            <h1 className="font-work text-[23px] leading-[36px] mb-2.5 font-semibold text-white md:text-[36px] xl:text-[52px] xl:leading-[84px]">
              {price}.00 $
            </h1>
            <p className="text-sm font-work text-white mb-2.5 xl:text-xl">
              Pay By Bank Card
            </p>
            <div className="flex items-center text-lg mb-[15px] xl:mb-[32px]">
              <svg
                className="absolute ml-3"
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_142_5553)">
                  <rect
                    x="0.238281"
                    y="0.286499"
                    width="19.6667"
                    height="14.0476"
                    rx="2.10714"
                    fill="#CCCCCC"
                  />
                  <rect
                    x="0.238281"
                    y="3.09607"
                    width="19.6667"
                    height="2.80952"
                    fill="#B3B3B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_142_5553">
                    <rect
                      x="0.238281"
                      y="0.286499"
                      width="19.6667"
                      height="14.0476"
                      rx="2.10714"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="text"
                id="cardnumber"
                className="bg-white pl-12 py-2 md:py-3 focus:outline-none w-full rounded-[5px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-gray-500 xl:placeholder:text-xl xl:text-xl"
                placeholder="Card Number"
              />
            </div>
            <div className="flex items-center text-lg xl:mb-[32px]">
              <svg
                className="absolute ml-3"
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_142_5553)">
                  <rect
                    x="0.238281"
                    y="0.286499"
                    width="19.6667"
                    height="14.0476"
                    rx="2.10714"
                    fill="#CCCCCC"
                  />
                  <rect
                    x="0.238281"
                    y="3.09607"
                    width="19.6667"
                    height="2.80952"
                    fill="#B3B3B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_142_5553">
                    <rect
                      x="0.238281"
                      y="0.286499"
                      width="19.6667"
                      height="14.0476"
                      rx="2.10714"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="text"
                id="emailAddress"
                className="bg-white pl-12 py-2 md:py-3 focus:outline-none w-full rounded-[5px] placeholder:font-work placeholder:text-base placeholder:leading-[22px] placeholder:text-gray-500 xl:placeholder:text-xl xl:text-xl"
                placeholder="Email Address"
              />
            </div>
            <hr className="w-full my-[18px]" />
            <h4 className="text-white font-work text-sm font-normal mb-2 xl:text-xl">
              Other payment Methods
            </h4>
            <div className="grid grid-cols-4 gap-x-[6px]">
              <div className="w-full h-[40px] rounded-[4px] overflow-hidden xl:h-[65px]">
                <img
                  src="./assets/payment/apple.png"
                  alt="no IMG"
                  className="w-full h-[40px] object-cover xl:h-[65px]"
                />
              </div>
              <div className="rounded-[4px] bg-[#6461FC] w-full self-center h-[40px] flex xl:h-[65px]">
                <h1 className="text-white font-work font-bold text-base m-auto self-center xl:text-2xl">
                  stripe
                </h1>
              </div>
              <div className="rounded-[4px] bg-[#CCECFF] w-full self-center h-[40px] flex xl:h-[65px]">
                <img
                  src="./assets/payment/payoneer.svg"
                  alt="no IMG"
                  className="w-full"
                />
              </div>
              <div className="rounded-[4px] bg-[#FF7E00] w-full self-center h-[40px] flex xl:h-[65px]">
                <img
                  src="./assets/payment/crypto.png"
                  alt="no IMG"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="hidden md:block m-auto xl:hidden">
          <img src="/assets/payment/payment_pvl.svg" />
        </div>
        <div className="hidden xl:block m-auto">
          <img src="/assets/payment/payment_pvl_xl.svg" />
        </div>
      </div>
      <div className="w-full flex">
        <motion.button
          whileHover={{ scale: 1.05, color: "#f8e112" }}
          transition={{ type: "spring", stiffness: 300 }}
          className={classNames({
            "h-[60px] text-base": true,
            "px-[60px] lg:px-[80px] lg:text-lg text-white rounded-[25px] border-2 mx-auto border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-white": true,
          })}
          style={{
            background:
              "linear-gradient(170deg, #A259FF 0%, #377DF7 100%), linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
          }}
          onClick={handleWithProceed}
        >
          Proceed!
        </motion.button>
      </div>
    </>
  );
};

export default PaymentForm;
