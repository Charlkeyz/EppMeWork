import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import FooterBar from "../footerbar/FooterBar";

const OutletComp = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default OutletComp;
