import React, { useState } from "react";
import AccountTypeCard from "./AccountTypeCard";
import { motion } from "framer-motion";
import CollectionCard from "./CollectionCard";

const fakeCollectionList = [
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
    type: "discord nitro",
    life_price: 5.0,
    six_months_price: 15.0,
    color1: "rgba(140, 158, 255, 0.50)",
  },
];
const CollectionTab = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #3B3B3B",
      }}
    >
      <div className="container mx-auto px-[30px] py-10 grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[30px] xl:grid-cols-3">
        {fakeCollectionList.map((item, index) => {
          console.log(item);
          return (
            <CollectionCard
              key={index}
              type={item.type}
              life_price={item.life_price}
              six_months_price={item.six_months_price}
              color1={item.color1}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CollectionTab;
