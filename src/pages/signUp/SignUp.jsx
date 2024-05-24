import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
import { handleuser } from "../../Redux/slice/UserInformations";
import { useSelector, useDispatch } from "react-redux";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { confirmPassword, setConfirmPassword } = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  const { value } = useSelector((state) => state.userDetails);

  function handlePassword() {
    setShow(!show);
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    checkFormFilled();
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    checkFormFilled();
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    checkFormFilled();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkFormFilled();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    checkFormFilled();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkFormFilled();
  };

  const checkFormFilled = () => {
    if (
      email !== "" &&
      password !== "" &&
      phoneNumber !== "" &&
      lastName !== "" &&
      firstName !== "" &&
      confirmPassword !== ""
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const dispatch = useDispatch();
  function display(e) {
    dispatch(handleuser(e.target.value));
    console.log(userDeatils);
  }

  return (
    <div className={style.main_container}>
      <img
        className={style.image_container}
        src="/medium-shot-man-cleaning-table 1.png"
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
      <div className={style.background}>
        <div className={style.already}>
          Already have an account?
          <span className={style.login_para}>
            <Link to="/WelcomePage" className={style.login}>
              Login
            </Link>
          </span>
        </div>

        <div className={style.border_top}></div>
        <div className={style.form_container}>
          <div className={style.signup_heading}>Sign Up</div>
          <div className={style.header_image}>
            <img
              className={style.epp_header2}
              src="/imagefolder/Frame 1000005379.png"
              alt="image"
            />
          </div>

          <div className={style.form}>
            <input
              className={style.form_input}
              type="text"
              placeholder="First Name"
              onInput={handleFirstNameChange}
            />
            <br /> <br />
            <input
              className={style.form_input}
              type="text"
              placeholder="Last Name"
              onInput={handleLastNameChange}
            />
            <br /> <br />
            <input
              className={style.form_input}
              type="email"
              placeholder="Email Address"
              required
              onInput={handleEmailChange}
            />
            <br /> <br />
            <input
              className={style.form_input}
              type="text"
              placeholder="Phone Number"
              required
              onInput={handlePhoneNumberChange}
            />
            <br /> <br />
            <input
              className={style.form_input}
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              onInput={handlePasswordChange}
            />
            <div className={style.eye_icon} onClick={handlePassword}>
              {show ? <FiEye /> : <FiEyeOff />}
            </div>
            <br /> <br />
            <input
              className={style.form_input2}
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              required
              onInput={handleConfirmPasswordChange}
            />
            {/* <div className={style.eye_icon2} onClick={handlePassword}></div> */}
            <div className={style.terms}>
              <p className={style.terms_para}>
                By clicking below and creating an account, I agree to
                EppMeWork’s
                <span> Terms of Service</span> and
                <span>Privacy Policy.</span>
              </p>
            </div>
            <div
              className={` ${style.create_btn} ${
                isFormFilled && style.green_bg
              }`}
            >
              <p>
                <Link to="/DashBoard1" className={style.create_para}>
                  Create Account
                </Link>
              </p>
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
      </div>
    </div>
  );
};

export default SignUp;
