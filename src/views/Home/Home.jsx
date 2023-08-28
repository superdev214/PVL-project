import React from "react";
import Navbar from "../../ui-elements/Navbar";
import SectionDiscoverAccount from "./components/SectionDiscoverAccounts";
import SectionTopSelling from "./components/SectionTopSelling";

const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <SectionDiscoverAccount/>
        <SectionTopSelling/>
      </div>
    </>
  );
};

export default Home;
