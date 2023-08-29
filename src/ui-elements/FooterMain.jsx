import React from "react";
import classNames from "classnames";
const FooterMain = () => {
  return (
    <div className="bg-[#3B3B3B]">
      <div className="container mx-auto px-8 py-10 space-y-10 md:px-12 xl:px-[130px] 2xl:px-[195px]">
        <div className="xl:flex xl:mx-auto xl:gap-x-[120px] xl:justify-center">
          <div className="mb-[30px] xl:max-w-[238px]">
            <img
              className="h-[50px] w-[53px] mb-4"
              src="/assets/pvl.png"
              alt="Workflow"
            />
            <span className="text-[#CCC] font-work font-normal leading-[22px] font-base ">
              PVL Shop - The best place to get online accounts for cheap
            </span>
          </div>
          <div className="space-y-[20px]">
            <h1 className="text-white text-[22px] font-work font-bold leading-[35px]">
              Explore
            </h1>
            <h3 className="text-[#CCC] font-work tetx-base font-normal leadking-[22px]">
              Marketplace
            </h3>
            <h3 className="text-[#CCC] font-work tetx-base font-normal leadking-[22px]">
              Rankings
            </h3>
            <h3 className="text-[#CCC] font-work tetx-base font-normal leadking-[22px]">
              Connect a wallet
            </h3>
          </div>
          <div className="space-y-[20px]">
            <h1 className="text-white text-[22px] font-work font-bold leading-[35px]">
              Join Our Weekly Digest
            </h1>
            <h3 className="text-[#CCC] font-work tetx-base font-normal leadking-[22px] xl:max-w-[330px]">
              Get exclusive promotions & updates straight to your inbox.
            </h3>
            <form className="md:flex">
              <input
                className="bg-white text-black text-base font-work font-normal leading-[22px] mb-4 rounded-[20px] w-full py-4 px-5 placeholder:text-black placeholder:text-base placeholder:font-work placeholder:leading-[22px] placeholder:font-normal outline-[#A259FF] md:h-[60px] md:w-[250px] md:pl-[20px] md:pr-[40px] focus:outline-none"
                placeholder="Enter Your Email here"
              />
              <button
                className={classNames({
                  "h-[60px] text-[22px]": true,
                  "w-full text-white rounded-[20px] px-[50px] font-work font-semibold leading-[22px]": true,
                  "pvl-btn": true,
                  "w-full md:w-[180px]": true,
                  "md:-ml-14": true,
                  "md:text-base": true,
                })}
                style={{
                  background:
                    "linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="mt-[30px] mb-[20px] w-full text-[#858584] bg-[#858584] border-1 border-[#858584]" />
        <h3 className="font-work text-sm font-normal leading-[13px] text-[#CCC]">
          Ⓒ All rights reserved, PVL Shop
        </h3>
      </div>
    </div>
  );
};
export default FooterMain;
