import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import style from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const Dropdown = () => {
    setOpen(!open);
  };

  const scrollTo = (y) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className={style.container}>
      <div className={style.innercontainer}>
        <div className={style.logo}>
          <div className={style.eppme}>
            <img src="/imagefolder/EppMeWork (1).png" alt="eppme logo" />
          </div>
          <img
            className={style.image1}
            src="/imagefolder/handshake (1) 1.png"
            alt="logo"
          />
        </div>
        <button className={style.btn_icon} onClick={handleToggleIcon}>
          {toggleIcon ? (
            <CgClose style={{ fontSize: "35px" }} />
          ) : (
            <HiBars3 style={{ fontSize: "35px" }} />
          )}
        </button>

        <div className={style.mobile_nav}>
          <nav className={style.mobile}>
            <ul className={`${style.navbar} ${toggleIcon ? style.active : ""}`}>
              <li className={style.servicework}></li>
              <li className={style.service} onClick={Dropdown}>
                Services
                <div
                  className={style.dropdown}
                  style={{ display: open ? "block" : "none" }}
                >
                  <ul className={style.dropdown_ul}>
                    <li>Drivers</li>
                    <li>Electrical Help</li>
                    <li>Professional Nannies</li>
                    <li>Cleaning Agents</li>
                    <li>Moving Help</li>
                    <li>Plumbing</li>
                    <li>Chef</li>
                    <li>Photograper</li>
                  </ul>
                </div>
              </li>
              <div className={style.work} onClick={() => scrollTo(1250)}>
                How it works
              </div>

              <li>
                <Link to="/SignUp" className={style.sign}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/WelcomePage" className={style.login}>
                  Log in
                </Link>
              </li>
              <li className={style.tasker}>Become a Tasker</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
