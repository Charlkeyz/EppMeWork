import React from "react";
import style from "./question3.module.css";
import { Link } from "react-router-dom";

const Question3 = () => {
  return (
    <div className={style.main_container}>
      <div className={style.post_container}>
        <h4>Post a task</h4>
        <ul>
          <li className={style.list}>Title & Date</li>
          <li className={style.list}>Location</li>
          <li className={style.title_date}>Details</li>
          <li className={style.list}>Budget</li>
        </ul>
      </div>

      <div className={style.basics_container}>
        <div className={style.basic_header}>
          <h3>Provide more details</h3>

          <div className={style.clean_container}>
            <p> </p>

            <div className={style.clean_container}>
              <p>What are the details? </p>

              <input
                className={style.input}
                type="text"
                placeholder="   Write a summary of the key details "
              />
            </div>
          </div>
          <div className={style.button_container}>
            <h4>
              <Link to="/Question2" className={style.button_back}>
                Back
              </Link>
            </h4>
            <h4>
              <Link to="/Question4" className={style.button_next}>
                Next
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
