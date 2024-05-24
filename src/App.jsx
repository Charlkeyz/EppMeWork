import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/logIn/LogIn";
import CreateAccount from "./pages/createAccount/CreateAccount";
import SignUp from "./pages/signUp/SignUp";
import WelcomePage from "./pages/welcomepage/WelcomePage";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import DashBoard1 from "./dashboard/dashboard1/DashBoard1";
import Dashboard2 from "./dashboard/dashboard2/Dashboard2";
import Outlett from "./outlets/Outlet";
import Notification from "./dashboard/notification/Notification";
import Question from "./dashboard/requests/question/Question";
import Question2 from "./dashboard/requests/question/Question2";
import Question3 from "./dashboard/requests/question/Question3";
import Question4 from "./dashboard/requests/question/Question4";
import AboutUs from "./component/aboutus/AboutUs";
import OutletComp from "./component/outletcomponent/OutletComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<OutletComp />}>
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/dashboard1" element={<DashBoard1 />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/" element={<Outlett />}>
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
