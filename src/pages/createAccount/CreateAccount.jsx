import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import style from "./createaccount.module.css";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [show, setShow] = useState(false);

  function handlePassword() {
    setShow(!show);
  }

  return (
    <div className={style.main_container}>
      <img
        className={style.image_container}
        src="\medium-shot-man-cleaning-table 1.png"
        alt=" A young man cleaning the table"
      />

      <div className={style.help}>
        <img
          className={style.baseline}
          src="/imagefolder/ic_baseline-help-outline.png"
          alt="baseline-icon"
        />
        Help
      </div>

      <div className={style.form_container}>
        <div className={style.signup_heading}>Sign Up</div>
        <div className={style.header_image}>
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
        </div>

        <div className={style.form}>
          <input className={style.form_input} type="text" placeholder="John" />
          <br /> <br />
          <input className={style.form_input} type="text" placeholder="Doe" />
          <br /> <br />
          <input
            className={style.form_input}
            type="text"
            placeholder="johndoe@gmail.com"
          />
          <br /> <br />
          <input
            className={style.form_input}
            type="text"
            placeholder="08037135680"
          />
          <br /> <br />
          <input
            className={style.form_input}
            type={show ? "text" : "password"}
            placeholder="**************"
          />
          <div className={style.eye_icon} onClick={handlePassword}>
            {show ? <FiEye /> : <FiEyeOff />}
          </div>
          <br /> <br />
          <input
            className={style.form_input2}
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <div className={style.terms}>
            <p className={style.terms_para}>
              By clicking below and creating an account, I agree to EppMeWork’s
              <span> Terms of Service</span> and <span>Privacy Policy.</span>
            </p>
          </div>
          <div className={style.create_btn}>
            <p className={style.create_para}>Create Account</p>
          </div>
          <div className={style.login}>
            <p className={style.login_para}>
              Already have an account?
              <Link to="/WelcomePage" className={style.login}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
