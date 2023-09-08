import AccountTypeCard from "../../Marketplace/component/AccountTypeCard";
import React, { useMemo, useEffect, useState } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import classNames from "classnames";
import AccountDetail from "../AccountDetail";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccountType, selectedAccount } from "../../../redux/reducer/accountTypeSlice";
const fakeAccountList = [
  {
    type: "netflix",
    life_price: 1.63,
    six_months_price: 0.33,
  },
  {
    type: "spotify",
    life_price: 1.63,
    six_months_price: 0.33,
    color1: "rgba(30, 215, 96, 0.50)",
  },
  {
    type: "crunchyroll",
    life_price: 5.0,
    six_months_price: 0,
    color1: "rgba(255, 141, 14, 0.50)",
  },
];
const MoreItems = () => {
  const { accountTypeList } = useSelector((state) => state.accountTypeList);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [showAccountType, setNumItems] = useState(3);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAccountType());
  }, []);
  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation} className="py-10 bg-[#2B2B2B]">
        <div className="mb-[30px] md:flex md:justify-between">
          <div
            className="hover:cursor-pointer"
            onClick={() => setNumItems(showAccountType === 3 ? 6 : 3)}
          >
            <h1 className="text-[28px] font-work font-semibold leading-[39px] text-white">
              {showAccountType === 3 ? "More Items" : "Less Items"}
            </h1>
          </div>
          <motion.button
            whileHover={{ color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={classNames({
              "hidden h-[60px] text-base px-[50px]": true,
              "text-white rounded-[20px] border-2 border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-[#2B2B2B]": true,
              "pvl-btn md:block": true,
            })}
          >
            <Link to="/marketplace">
              {" "}
              <img
                src="/assets/account/arrowright.svg"
                className="w-[20px] h-[20px] inline-block mr-[12px]"
              />
              Go To Explore Page
            </Link>
          </motion.button>
        </div>
        <div className="grid grid-cols-1 gap-y-[30px] md:grid-cols-2 xl:grid-cols-3 md:gap-[30px]">
          {accountTypeList.slice(0, showAccountType).map((item, index) => {
            return (
              <Link
                to="/accountdetail"
                key={index}
                onClick={() => {
                  dispatch(selectedAccount(index));
                }}
              >
                <AccountTypeCard
                  avatar={item.avatar}
                  key={index}
                  type={item.typename}
                  life_price={item.priceLifeTime}
                  six_months_price={item.priceSixMonths}
                  // color1={item.color1}
                />
              </Link>
            );
          })}
          <motion.button
            whileHover={{ color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={classNames({
              "h-[60px] text-base": true,
              "w-full text-white rounded-[20px] border-2 border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-[#2B2B2B]": true,
              "pvl-btn md:hidden": true,
            })}
          >
            {" "}
            <img
              src="/assets/account/arrowright.svg"
              className="w-[20px] h-[20px] inline-block mr-[12px]"
            />
            Go To Explore Page
          </motion.button>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default MoreItems;
