import React from "react";
import SearchAccount from "./component/SearchAccount";
import { Tab } from "../../utils/Tabs";
import AccountTypesTab from "./component/AccountTypesTab";
const MarketPlace = () => {
  return (
    <>
      <SearchAccount />
      <Tab label="Account Types" count="249">
        <AccountTypesTab />
      </Tab>
    </>
  );
};

export default MarketPlace;
