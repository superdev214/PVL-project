import React from "react";
import Navbar from "../../ui-elements/Navbar";
import { Tabs, Tab } from "../../utils/Tabs";
import FooterMain from "../../ui-elements/FooterMain";
import ProceedCheckOut from "./component/ProceedCheckOut";
import ProceedAccountTypesTab from "./component/ProceedAccountTypesTab";
const Proceed = () => {
  return (
    <>
      <Navbar />
      <ProceedCheckOut />
        <Tab label="Account Types" count="249">
          <ProceedAccountTypesTab />
        </Tab>
      <FooterMain />
    </>
  );
};

export default Proceed;
