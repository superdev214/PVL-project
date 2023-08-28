import React from "react";
import classNames from "classnames";
const ButtonOutline = (props) => {
  const { content, type, userClass} = props;
  return (
    <button
      className={classNames({
        "h-[60px] text-[22px]": type === "secondary",
        "h-[46px] text-base": type === "tertiary",
        "h-[72px] text-base": type === "primary",
        "w-full text-white rounded-[20px] border-2 border-[#A259FF] px-[50px] font-work font-semibold leading-[22px] my-auto": true,
        "pvl-btn md:w-auto": true,
        userClass : true,
      })}
    >
      {" "}
      <img src="/assets/rocket.svg" className="w-[20px] h-[20px] inline-block mr-[12px]"/>
      {content}
    </button>
  );
};

export default ButtonOutline;
