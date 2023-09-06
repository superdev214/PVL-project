import React, { useEffect, useState } from "react";
import AccountTypeCard from "./AccountTypeCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccountType } from "../../../redux/reducer/accountTypeSlice";
import { selectedAccount } from "../../../redux/reducer/accountTypeSlice";
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
  {
    type: "nordvpn",
    life_price: 5.0,
    six_months_price: 0,
    color1: "rgba(82, 184, 252, 0.50)",
  },
  {
    type: "hbo max",
    life_price: 5.0,
    six_months_price: 0,
    color1: "rgba(90, 21, 207, 0.50)",
  },
  {
    type: "discord nitro",
    life_price: 5.0,
    six_months_price: 15.0,
    color1: "rgba(140, 158, 255, 0.50)",
  },
  {
    type: "unknown prototype",
    life_price: 5.0,
    six_months_price: 10.0,
  },
];
const AccountTypesTab = () => {
  const dispatch = useDispatch();
  const [draw, setDraw] = useState(false);
  const { accountTypeList , currentIndex} = useSelector((state) => state.accountTypeList);
  useEffect(() => {
    console.log("start");
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
