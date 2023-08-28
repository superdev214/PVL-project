import React from "react";
import classNames from "classnames";
const SectionSendEmail = () => {
  return (
    <div className="bg-[#2B2B2B]">
      <div className="container mx-auto px-8 py-10 space-y-10 md:px-12 xl:px-[130px] 2xl:px-[195px] ">
        <div className="md:bg-[#3B3B3B] md:grid md:grid-cols-2 md:rounded-[20px] md:px-[30px] md:py-[40px] md:gap-x-[30px]">
          <img src="./assets/e-background.png" className="w-full mb-[30px] h-full" />
          <div className="md:my-auto  xl:!justify-between">
            <div className="mb-10">
              <h1 className="text-white text-[28px] font-work font-semibold leading-[39px] mb-2.5 xl:text-[38px] xl:leading-[45px]">
                Join Our Weekly Digest
              </h1>
              <span className="text-white text-base font-work font-normal leading-[22px] xl:text-[22px]">
                Get exclusive promotions & updates straight to your inbox.
              </span>
            </div>
            <form className="xl:flex">
              <input
                className="bg-white text-black text-base font-work font-normal leading-[22px] mb-4 rounded-[20px] w-full py-4 px-5 placeholder:text-black placeholder:text-base placeholder:font-work placeholder:leadding-[22px] placeholder:font-normal outline-[#A259FF] xl:h-[60px] xl:w-[350px] xl:pl-[20px] xl:pr-[40px]"
                placeholder="Enter Your Email here"
              />
              <button
                className={classNames({
                  "h-[60px] text-[22px]": true,
                  "w-full text-white rounded-[20px] border-2 border-[#A259FF] px-[50px] font-work font-semibold leading-[22px]": true,
                  "pvl-btn": true,
                  "w-full": true,
                  "xl:-ml-8" : true,
                })}
                style={{
                  background:
                    "linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
                }}
              >
                {" "}
                <img
                  src="/assets/email.png"
                  className="w-[20px] h-[20px] inline-block mr-[12px] "
                />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSendEmail;
