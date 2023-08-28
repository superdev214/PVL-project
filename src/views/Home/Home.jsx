import React from "react";
import Navbar from "../../ui-elements/Navbar";
import SectionDiscoverAccount from "./components/SectionDiscoverAccounts";
import SectionTopSelling from "./components/SectionTopSelling";
import SectionNFTShop from "./components/SectionNFTShop";
const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <SectionDiscoverAccount/>
        <SectionTopSelling/>
        <SectionNFTShop/>
      </div>
    </>
  );
};

export default Home;
