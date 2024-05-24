import React from "react";
import style from "./resetpassword.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import EmailSent from "../../component/emailsent/EmailSent";

const ResetPassword = () => {
  const [open, setIsOpen] = useState(false);
  const Shoow = () => {
    setIsOpen(!open);
  };
  return (
    <div>
      <div className={style.container}>
        <img
          className={style.image}
          src="\medium-shot-man-cleaning-table 1.png"
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
          <div className={style.epme_image}>
            <img
              className={style.epp_header}
              src="/imagefolder/EppMeWork.png"
              alt="image"
            />

            <img
              className={style.epp_header2}
              src="/imagefolder/handshake (1) 1.png"
              alt="image"
            />
          </div>
          <div className={style.form}>
            <div className={style.password_container}>
              <h3 className={style.password}>Reset Password</h3>
              <h4 className={style.reset_container}>
                <p className={style.reset}>
                  Enter you email address and we wiil send you a
                  <nav>reset instruction</nav>
                </p>
              </h4>
            </div>
            <p className={style.input_text}>
              <h4 className={style.input_content}>Email Address</h4>
            </p>
            <br />
            <input
              className={style.form_input}
              type="text"
              placeholder="Email Address"
              required
            />
            <br />
          </div>

          <div className={style.btn_para}>
            <h4>
              <Link onClick={Shoow} className={style.btn_log}>
                Send
              </Link>
              {open && <EmailSent />}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
