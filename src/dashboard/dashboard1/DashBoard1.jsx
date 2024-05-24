import React, { useState } from "react";
import style from "./dashboard1.module.css";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const DashBoard1 = () => {
  const location = useLocation();
  const { userDeatils } = useSelector((state) => state.userDetails);
  function isActive(routes) {
    return location.pathname === routes;
  }

  return (
    <div className={style.main}>
      <div className={style.sidebar_container}>
        <div className={style.sidebar_image}>
          <img src="/imagefolder/EppMeWork (2).png" alt="epmework logo" />
        </div>
        <img
          className={style.collapse}
          src="/imagefolder/CaretDoubleLeft.png"
          alt=" collapse logo"
        />
        <img
          className={style.image1}
          src="/imagefolder/handshake (1) 1.png"
          alt="logo"
        />

        <div className={style.dash_container}>
          <ul>
            <li className={style.dashboard}>
              <Link
                to="/DashBoard1"
                style={{
                  backgroundColor: isActive("/Dashboard1") ? "red" : "black",
                }}
              >
                <img
                  src="/imagefolder/mage_dashboard.png"
                  alt="dashboard logo"
                />
                <img src="/imagefolder/Dashboard.png" alt="dashboard logo" />
              </Link>
            </li>

            <li className={style.request}>
              <img
                src="/imagefolder/material-symbols_add.png"
                alt="plus logo"
              />
              <Link
                to="/Question"
                style={{
                  backgroundColor: isActive("/Dashboard2") ? "red" : "black",
                }}
              >
                Request
              </Link>
            </li>
            <li className={style.request}>
              <img
                src="/imagefolder/fluent_tooltip-quote-20-regular.png"
                alt="offer logo"
              />
              <Link
                to="/Dashboard2"
                style={{
                  backgroundColor: isActive("/Dashboard2") ? "red" : "black",
                }}
              >
                Offers
              </Link>
            </li>
            <li className={style.request}>
              <img
                src="/imagefolder/material-symbols_chat-outline.png"
                alt="inbox logo"
              />
              Inbox
            </li>
            <li className={style.request}>
              <img src="/imagefolder/Wallet.png" alt="wallet logo" />
              Payment
            </li>
            <li className={style.request}>
              <img
                src="/imagefolder/mdi_account-outline.png"
                alt="profile logo"
              />
              Profile
            </li>
            <li className={style.request}>
              <img
                src="/imagefolder/material-symbols_logout.png"
                alt="log out logo"
              />
              Log out
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={style.main_container}> */}
      <div className={style.people_container}>
        <div className={style.header_container}>
          {/* <h3 className={style.offers}>Available Offers</h3> */}

          <div className={style.jane}>
            <p>
              <img
                src="/imagefolder/carbon_settings.png"
                alt="carbon setting"
              />
            </p>
            <p>
              <Link
                to="/Notification"
                style={{
                  backgroundColor: isActive("Notification") ? "red" : "black",
                }}
              >
                <img
                  src="/imagefolder/solar_bell-linear.png"
                  alt="sollar bell"
                />
              </Link>
            </p>
            <p>
              <img src="/imagefolder/Rectangle 101.png" alt="rectangle" />
            </p>
            <p>
              <img src="/imagefolder/Rectangle 2.png" alt="sollar bell" />
            </p>
            <p>{userDeatils}</p>

            <p>
              <img src="/imagefolder/chevron-down.png" alt="chevron down" />
            </p>
          </div>
        </div>
        <div className={style.greeting_container}>
          <div className={style.unflex}>
            <h4>Good Afternoon</h4>
            <p>{userDeatils}</p>
          </div>
          <div className={style.greeting_image}>
            <img
              className={style.image}
              src="/imagefolder/Icon.png"
              alt="adding icon"
            />
            <p className={style.greeting_para}>Request</p>
          </div>
        </div>

        <div className={style.parent_div}>
          <div className={style.requests_container}>
            <img
              className={style.checklist}
              src="/imagefolder/checklist 1.png"
              alt="checklist logo"
            />
            <h3 className={style.requests}>Total Requests</h3>
            <p className={style.requests_para}>000</p>
          </div>
          <div className={style.requests_container}>
            <img
              className={style.checklist}
              src="/imagefolder/Frame 43122.png"
              alt="mark logo"
            />
            <h3 className={style.requests}>Total Requests</h3>
            <p className={style.requests_para}>000</p>
          </div>
          <div className={style.requests_container}>
            <img
              className={style.checklist}
              src="/imagefolder/expired 1.png"
              alt="expired logo"
            />
            <h3 className={style.requests}>Total Requests</h3>
            <p className={style.requests_para}>000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard1;
