import React, { useEffect, useState } from "react";
import AccountTypeCard from "./AccountTypeCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccountType } from "../../../redux/reducer/accountTypeSlice";
import { selectedAccount } from "../../../redux/reducer/accountTypeSlice";

const AccountTypesTab = () => {
  const dispatch = useDispatch();
  const [draw, setDraw] = useState(false);
  const { accountTypeList , currentIndex} = useSelector((state) => state.accountTypeList);
  useEffect(() => {
    // console.log("start");
    // console.log(accountTypeList[0].avatar);
    dispatch(getAllAccountType());
  }, []);
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #3B3B3B",
      }}
    >
      {!accountTypeList.length && (
        <h1 className="text-white text-7xl">There is no account!</h1>
      )}
      <div className="container mx-auto px-[30px] py-10 grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[30px] xl:grid-cols-3">
        {accountTypeList &&
          accountTypeList.map((item, index) => {
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
      </div>
    </div>
  );
};
export default AccountTypesTab;
