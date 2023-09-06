import React, { useMemo, useEffect, useState } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import SellingAccount from "./SellingAccount";
import ButtonOutline from "../../../ui-elements/buttons/ButtonOutline";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccountType } from "../../../redux/reducer/accountTypeSlice";
const fakeAccount = [
  { type: "netflix", price: 6 },
  { type: "spotify", price: 5 },
  { type: "discord nitro", price: 5 },
  { type: "crunchyroll", price: 5 },
  { type: "nordvpn", price: 5 },
  { type: "netflix", price: 6 },
  { type: "spotify", price: 5 },
];

const SectionTopSelling = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const dispatch = useDispatch();
  const [showAccountType, setNumItems] = useState(4);
  const { accountTypeList } = useSelector((state) => state.accountTypeList);
  return (
    <ScrollAnimationWrapper>
      <div className="bg-[#2B2B2B]">
        <motion.div
          variants={scrollAnimation}
          className="container mx-auto px-8 py-10 space-y-10 md:px-12 xl:px-[130px] 2xl:px-[195px]"
        >
          {/* header */}
          <div className="min-w-[315px]  md:flex md:justify-between">
            <div className="space-y-2.5">
              <h1 className="text-white text-work font-semibold leading-[39px] text-[28px] xl:text-[38px]">
                Top Selling
              </h1>
              <p className="text-white text-work font-normal leading-[22px] text-base xl:text-[22px]">
                Check out the best selling accounts
              </p>
            </div>
            <div
              className="hidden md:block"
              onClick={() => setNumItems(showAccountType === 4 ? 8 : 4)}
            >
              <ButtonOutline
                 content={showAccountType === 4 ? "Explore More" : "Explore less"}
                userClass="w-full"
                type="secondary"
              />
            </div>
          </div>
          {/* account list */}
          <div className="space-y-5 md:space-y-0  md:grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-[30px] xl:grid-cols-4  xl:gap-x-[30px] xl:gap-y-[30px]">
            {accountTypeList.slice(0, showAccountType).map((account, id) => {
              console.log(account);
              return (
                <SellingAccount
                  avatar={account.avatar}
                  type={account.typename}
                  order={id + 1}
                  key={id}
                  price={account.priceLifeTime}
                  i={id}
                />
              );
            })}
          </div>
          {/* button */}
          <div
            className="md:hidden"
            onClick={() => setNumItems(showAccountType === 4 ? 8 : 4)}
          >
            <ButtonOutline
              content={showAccountType === 4 ? "Explore More" : "Explore less"}
              userClass="w-full"
              type="secondary"
            />
          </div>
        </motion.div>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default SectionTopSelling;
