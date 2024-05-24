import React from "react";
import Navbar from "../component/navbar/Navbar";
import Explore from "../component/explore/Explore";
import GetHelp from "../component/gethelp/GetHelp";
import OurMission from "../component/ourmission/OurMission";
import Popular from "../component/popular/Popular";
import FooterBar from "../component/footerbar/FooterBar";
import HowItWorks from "../component/howtitworks/HowItWorks";
import WhatPeopleSay from "../component/whatpeoplesay/WhatPeopleSay";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Explore />
      <Popular />
      <HowItWorks />
      <OurMission />
      <WhatPeopleSay />
      <GetHelp />
      <FooterBar />
    </>
  );
};

export default HomePage;
