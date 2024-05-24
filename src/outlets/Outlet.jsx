import React from "react";
import DashBoard1 from "../dashboard/dashboard1/DashBoard1";
import { Outlet } from "react-router-dom";
// imort {useOutlet} from

const Outlett = () => {
  return (
    <div>
      <DashBoard1 />
      <Outlet />
    </div>
  );
};

export default Outlett;
