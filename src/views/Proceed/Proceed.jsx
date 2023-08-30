import React from "react";
import Navbar from "../../ui-elements/Navbar";
import { Tabs, Tab } from "../../utils/Tabs";
import CollectionTab from "../Marketplace/component/CollectionTab";
import FooterMain from "../../ui-elements/FooterMain";
import ProceedCheckOut from "./component/ProceedCheckOut";
import ProceedAccountTypesTab from "./component/ProceedAccountTypesTab";
const Proceed = () => {
  return (
    <>
      <Navbar />
      <ProceedCheckOut />
      <Tabs>
        <Tab label="Account Types" count="249">
          <ProceedAccountTypesTab />
        </Tab>
        <Tab label="Collections" count="67">
          <CollectionTab />
        </Tab>
      </Tabs>
      <FooterMain />
    </>
  );
};

export default Proceed;
