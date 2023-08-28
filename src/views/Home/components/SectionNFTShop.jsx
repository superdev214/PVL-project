import React from "react";
import SellTimer from "../../../ui-elements/SellTimer";
import classNames from "classnames";
const SectionNFTShop = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("./assets/background/NFT Highlight.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-8 pt-[120px] pb-[40px] space-y-10 md:px-12 xl:px-[130px] 2xl:px-[195px] md:pt-[360px] md:pb-[60px]">
        <div className="grid grid-cols-1 gap-y-[30px]  md:grid-cols-2">
          <div className="grid grid-cols-1 gap-y-[30px]">
            <div className="bg-[#3B3B3B]  min-w-[150px] text-white rounded-[20px] font-work text-base leading-[22px] font-normal px-[20px] py-[10px] w-[45%] text-center md:w-[150px] md:h-[42px]">
              Trusted Seller
            </div>
            <div>
              <h1 className="text-white text-[38px] leading-[46px] font-work font-semibold">
                10% Off <br className="md:hidden" />
                Sale
              </h1>
            </div>
            <button
            className={classNames({
              "hidden h-[60px] text-base": true,
              "w-full text-black rounded-[20px] border-2 border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-white": true,
              "pvl-btn md:w-[50%]": true,
              "md:block": true,
            })}
          >
            {" "}
            <img
              src="/assets/Eye.svg"
              className="w-[20px] h-[20px] inline-block mr-[12px]"
            />
            Shop now
          </button>
          </div>
          <div className="md:text-center md:place-self-end">
            <SellTimer />
          </div>
          <button
            className={classNames({
              "h-[60px] text-[22px]": true,
              "w-full text-black rounded-[20px] border-2 border-[#A259FF] px-[50px] font-work font-semibold leading-[22px] my-auto bg-white": true,
              "pvl-btn md:w-auto": true,
              "w-full": true,
              "md:hidden": true,

            })}
          >
            {" "}
            <img
              src="/assets/Eye.svg"
              className="w-[20px] h-[20px] inline-block mr-[12px]"
            />
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionNFTShop;
