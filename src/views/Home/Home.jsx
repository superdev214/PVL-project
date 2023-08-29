import React from "react";
import Navbar from "../../ui-elements/Navbar";
import SectionDiscoverAccount from "./components/SectionDiscoverAccounts";
import SectionTopSelling from "./components/SectionTopSelling";
import SectionNFTShop from "./components/SectionNFTShop";
import SectionHowWorks from "./components/SectionHowWorks";
import SectionSendEmail from "./components/SectionSendEmail";
import Footer from "../../ui-elements/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <SectionDiscoverAccount/>
        <SectionTopSelling/>
        <SectionNFTShop/>
        <SectionHowWorks/>
        <SectionSendEmail/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
