import React, { useMemo, useEffect, useState } from "react";
import getScrollAnimation from "./getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  const variants = {
    onscreen: { opacity: 1, y: "0" },
    offscreen: { opacity: 0, y: "-1000px" },
  };

  return (
    <div>
      <div className="bg-[#2B2B2B] pb-10 border-t-2 border-[#3B3B3B]">
        <ScrollAnimationWrapper>
          <motion.div
            variants={variants}
            className="container mx-auto px-[30px] flex"
          >
            {children.map((child, id) => (
              <>
                <button
                  key={id}
                  className={`${
                    activeTab === child.props.label
                      ? "border-b-2 border-white-500 !text-white"
                      : ""
                  } flex-1 gap-x-4 flex justify-center items-center mt-5  pb-4 mb-1 font-work font-semibold text-[#858584] text-base`}
                  onClick={(e) => handleClick(e, child.props.label)}
                >
                  {child.props.label}
                  <span
                    key={id}
                    className={`${
                      activeTab === child.props.label ? "!bg-[#858584]" : ""
                    } flex px-[10px] py-[5px] my-auto font-mono rounded-[20px] font-normal text-[#FFF] text-base bg-[#3B3B3B]`}
                    onClick={(e) => handleClick(e, child.props.label)}
                  >
                    {child.props.count}
                  </span>
                </button>
              </>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div>
        <div className=" border-b-2 border-[#2B2B2B]">
          {children.map((child, id) => {
            if (child.props.label === activeTab) {
              return <div key={id}>{child.props.children}</div>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden ">
      {children}
    </div>
  );
};
export { Tabs, Tab };
