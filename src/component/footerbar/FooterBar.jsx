import React from "react";
import style from "./footerbar.module.css";
import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <div className={style.container}>
      <div className={style.footer_container}>
        <div className={style.contact}>
          <div className={style.logo}>
            <img
              className={style.image1}
              src="\handshake (1) 1.png"
              alt="logo"
            />
          </div>
          <div className={style.ikorodu}>
            <p className={style.ikorodu_para}>
              39 Ikorodu Road, Jibowu, Yaba, Lagos
            </p>
          </div>
          <div className={style.info}>
            <p className={style.info_para}>Info@eppmework.com</p>
          </div>

          <div className={style.helpme}>
            <p className={style.helpme_para}>0700EPPMEWORK</p>
          </div>
          <div className={style.copyright}>
            <p className={style.copyright_para}>
              © Copyright 2020 EppMeWork <p>All rights reserved.</p>
            </p>
          </div>
        </div>

        <div className={style.categories_div}>
          Categories
          <ol className={style.list}>
            <li>
              <Link to="/AboutUs" className={style.about}>
                About
              </Link>
            </li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Community</li>
          </ol>
        </div>
        <div className={style.categories_legal}>
          Lega
          <ol className={style.list}>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ol>
        </div>
        <div className={style.categories_follow}>
          Follow us
          <ol className={style.follow}>
            <li>
              <img src="\Vector.png" alt="facebook logo" />
            </li>
            <li>
              <img src="/Social icon1.png" alt="twitter logo" />
            </li>
            <li>
              <img src="\Social icon2.png" alt="instagram logo" />
            </li>
            <li>
              <img src="\Social icon.png" alt="linkedin logo" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
