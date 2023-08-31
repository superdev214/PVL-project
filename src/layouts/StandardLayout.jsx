import React, { useEffect } from "react";
import Navbar from "../ui-elements/Navbar";
import Footer from "../ui-elements/Footer";
import { useLocation } from "react-router-dom";
const StandardLayout = ({ children }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default StandardLayout;
