import React from "react";
import { Tab } from "../../utils/Tabs";
import ProceedCheckOut from "./component/ProceedCheckOut";
import ProceedAccountTypesTab from "./component/ProceedAccountTypesTab";

const Proceed = () => {
  return (
    <>
      <ProceedCheckOut />
      <Tab label="Account Types" count="249">
        <ProceedAccountTypesTab />
      </Tab>
    </>
  );
};

export default Proceed;
