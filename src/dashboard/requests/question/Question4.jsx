import React from "react";
import style from "./question4.module.css";
import { Link } from "react-router-dom";

const Question4 = () => {
  return (
    <div className={style.main_container}>
      <div className={style.post_container}>
        <h4>Post a task</h4>
        <ul>
          <li className={style.list}>Title & Date</li>
          <li className={style.list}>Location</li>
          <li className={style.list}>Details</li>
          <li className={style.title_date}>Budget</li>
        </ul>
      </div>

      <div className={style.basics_container}>
        <div className={style.basic_header}>
          <h3>Suggest your budget</h3>

          <div className={style.clean_container}>
            <p className={style.budget}>What is your budget? </p>

            <div className={style.clean_container}>
              <p className={style.paragraph}>
                You can always negotiate your final price.
              </p>

              <input
                className={style.input}
                type="text"
                placeholder="       Enter budget here"
              />
              <img
                className={style.image}
                src="/imagefolder/₦.png"
                alt="Naira logo"
              />
            </div>
          </div>
          <div className={style.button_container}>
            <h4>
              <Link to="/Question3" className={style.button_back}>
                Back
              </Link>
            </h4>
            <h4>
              <Link to="/Login" className={style.button_next}>
                Get quotes
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question4;
