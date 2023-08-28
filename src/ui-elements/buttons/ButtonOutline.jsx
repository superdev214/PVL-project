import React from "react";
import classNames from "classnames";
const ButtonOutline = (props) => {
  const { children, type } = props;
  return (
    <button
      className={classNames({
        "h-[60px]": type === "secondary",
        "h-[46px]": type === "tertiary",
        "h-[72px]": type === "primary",
        "text-white rounded-[20px] px-[30px] font-work font-semibold leading-[22px]": true,
      })}
      style={{
        background:
          "linear-gradient(149deg, #A259FF 0%, #FF6250 100%), #A259FF",
      }}
    >
      {" "}
      <img src="/assets/User.svg" className="w-[20px] h-[20px] inline-block mr-[12px]"/>
      {children}
    </button>
  );
};

export default ButtonOutline;
