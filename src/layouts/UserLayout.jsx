import React, { useEffect } from "react";
import Navbar from "../ui-elements/Navbar";
import FooterMain from "../ui-elements/FooterMain";
import { useLocation } from "react-router-dom";
const UserLayout = ({ children }) => {
    let location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
      <Navbar />
      {children}
      <FooterMain />
    </>
  );
};

export default UserLayout;
