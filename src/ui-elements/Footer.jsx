import React from "react";

const Footer = () => {
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
              How it works?
            </h3>
            <h3 className="text-[#CCC] font-work tetx-base font-normal leadking-[22px]">
              Support
            </h3>
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
export default Footer;
