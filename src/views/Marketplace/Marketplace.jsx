import React, { useEffect, useState } from "react";
import Navbar from "../../ui-elements/Navbar";
import SearchAccount from "./component/SearchAccount";
import { Tabs, Tab } from "../../utils/Tabs";
import AccountTypesTab from "./component/AccountTypesTab";
import FooterMain from "../../ui-elements/FooterMain";
const MarketPlace = () => {
  return (
    <>
      <Navbar />
      <SearchAccount />
        <Tab label="Account Types" count="249">
          <AccountTypesTab />
        </Tab>

      <FooterMain />
    </>
  );
};

export default MarketPlace;
