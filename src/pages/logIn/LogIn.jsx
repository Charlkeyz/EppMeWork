import React from "react";
import { Link } from "react-router-dom";

import style from "./login.module.css";

const LogIn = () => {
  return (
    <div className={style.container}>
      <img
        className={style.image}
        src="\medium-shot-man-cleaning-table 1.png"
        alt="Man cleaning the table"
      />

      <div className={style.help}>
        <img
          className={style.baseline}
          src="/imagefolder/ic_baseline-help-outline.png"
          alt="baseline-icon"
        />
        Help
      </div>
      <div className={style.epme_container}>
        <div className={style.form_container}>
          <img
            className={style.epp_header}
            src="/imagefolder/EppMeWork.png"
            alt="image"
          />

          <img
            className={style.epp_header2}
            src="/imagefolder/Frame 1000005379.png"
            alt="image"
          />

          <div className={style.btn_sign}>
            <h3>
              <Link to="/SignUp" className={style.btn_para}>
                Sign Up
              </Link>
            </h3>
          </div>
          <div className={style.btn_log}>
            <h3>
              <Link to="/WelcomePage" className={style.btn_para2}>
                Log in
              </Link>
            </h3>
          </div>

          <div className={style.form_para}>
            <p className={style.form_paragraph}>
              By signing up you agree to our
              <span className={style.paragrah_span}> Terms of Use</span> and
              <p>
                <span className={style.paragraph_span2}>Privacy Policy.</span>
              </p>
            </p>
          </div>
        </div>
        <div className={style.social_container}>
          <div className={style.border1}></div>
          or
          <div className={style.border2}></div>
        </div>

        <div className={style.media}>
          <p className={style.google}>
            <h4 className={style.google_para}>Continue with Google</h4>
            <img
              className={style.image_google}
              src="/imagefolder/Frame 1000005001.png"
              alt="google logo"
            />
          </p>
          <p className={style.google}>
            <h4 className={style.google_para}>Continue with Twitter</h4>
            <img
              className={style.image_google}
              src="/imagefolder/bi_twitter-x.png"
              alt="twitter logo"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
