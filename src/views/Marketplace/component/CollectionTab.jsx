import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import AccountTypeCard from "./AccountTypeCard";
const fakeAccountList = [
    {
      id: 1,
      type: "netflix",
      life_price: 1.63,
      six_months_price: 0.33,
    },
    {
      id: 2,
      type: "spotify",
      life_price: 1.63,
      six_months_price: 0.33,
      color1: "rgba(30, 215, 96, 0.50)",
    },
    {
      id: 3,
      type: "crunchyroll",
      life_price: 5.0,
      six_months_price: 0,
      color1: "rgba(255, 141, 14, 0.50)",
    },
    {
      id: 4,
      type: "nordvpn",
      life_price: 5.0,
      six_months_price: 0,
      color1: "rgba(82, 184, 252, 0.50)",
    },
    {
      id: 5,
      type: "hbo max",
      life_price: 5.0,
      six_months_price: 0,
      color1: "rgba(90, 21, 207, 0.50)",
    },
    {
      id: 6,
      type: "discord nitro",
      life_price: 5.0,
      six_months_price: 15.0,
      color1: "rgba(140, 158, 255, 0.50)",
    },
    {
      id: 7,
      type: "unknown prototype",
      life_price: 5.0,
      six_months_price: 10.0,
    },
  ];
const CollectionTab = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #3B3B3B",
      }}
    >
      <div className="container mx-auto px-[30px] py-10 grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[30px] xl:grid-cols-3">
        {fakeAccountList.map((item) => {
          return (
            <>
              <AccountTypeCard
                key={item.type}
                type={item.type}
                life_price={item.life_price}
                six_months_price={item.six_months_price}
                color1={item.color1}
                id={item.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default CollectionTab;
