import React from "react";
import style from "./question2.module.css";
import { Link } from "react-router-dom";

const Question2 = () => {
  return (
    <div className={style.main_container}>
      <div className={style.post_container}>
        <h4>Post a task</h4>
        <ul>
          <li className={style.list}>Title & Date</li>
          <li className={style.title_date}>Location</li>
          <li className={style.list}>Details</li>
          <li className={style.list}>Budget</li>
        </ul>
      </div>

      <div className={style.basics_container}>
        <div className={style.basic_header}>
          <h3>Tell us where</h3>

          <div className={style.clean_container}>
            <div className={style.clean_container}>
              <p> Where do you need done? </p>

              <input
                className={style.input}
                type="text"
                placeholder="         Enter address or landmark"
              />
              <img
                className={style.image}
                src="/imagefolder/mdi_location-on-outline.png"
                alt="landmap"
              />
            </div>
          </div>
          <div className={style.button_container}>
            <h4>
              <Link to="/Question" className={style.button_back}>
                Back
              </Link>
            </h4>
            <h4>
              <Link to="/Question3" className={style.button_next}>
                Next
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
