import React from "react";
import Navbar from "../../ui-elements/Navbar";
import SearchAccount from "./component/SearchAccount";
import { Tabs, Tab } from "../../utils/Tabs";
import AccountTypesTab from "./component/AccountTypesTab";
import FooterMain from "../../ui-elements/FooterMain";
import CollectionTab from "./component/CollectionTab";
const MarketPlace = () => {
  return (
    <>
      <Navbar />
        <SearchAccount />
        <Tabs>
          <Tab label="Account Types" count="249">
            <AccountTypesTab />
          </Tab>
          <Tab label="Collections" count="67">
            <CollectionTab />
          </Tab>
        </Tabs>
      <FooterMain />
    </>
  );
};

export default MarketPlace;
