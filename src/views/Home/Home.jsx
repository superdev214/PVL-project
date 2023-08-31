import React from "react";
import SectionDiscoverAccount from "./components/SectionDiscoverAccounts";
import SectionTopSelling from "./components/SectionTopSelling";
import SectionNFTShop from "./components/SectionNFTShop";
import SectionHowWorks from "./components/SectionHowWorks";
import SectionSendEmail from "./components/SectionSendEmail";

const Home = () => {
  return (
    <>
      <div>
        <SectionDiscoverAccount/>
        <SectionTopSelling/>
        <SectionNFTShop/>
        <SectionHowWorks/>
        <SectionSendEmail/>
      </div>
    </>
  ); 
};

export default Home;
