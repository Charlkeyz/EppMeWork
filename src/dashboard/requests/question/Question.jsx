import React, { useState } from "react";
import style from "./question.module.css";
import { Link } from "react-router-dom";

const Question = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={style.main_container}>
      <div className={style.post_container}>
        <h4>Post a task</h4>
        <ul>
          <li className={style.title_date}>Title & Date</li>
          <li className={style.list}>Location</li>
          <li className={style.list}>Details</li>
          <li className={style.list}>Budget</li>
        </ul>
      </div>

      <div className={style.basics_container}>
        <div className={style.basic_header}>
          <h3>Let’s start with the basics</h3>
          <div className={style.clean_container}>
            <p>In a few words, what do you need done? </p>
          </div>
          <input
            className={style.input}
            type="text"
            placeholder="   e.g Help me clean my house"
          />
          <div className={style.date_container}>
            <p>When do you need this done?</p>
          </div>

          <input type="" className={style.date} placeholder="   MM/DD/YYYY" />

          <img
            className={style.image}
            src="/imagefolder/Vector.png"
            alt="icon"
          />
          <div className={style.time_done}>
            <p>What time do you need this done?</p>
            <div className={style.components_image}>
              <img
                className={style.imag1}
                src="/imagefolder/Component 15.png"
                alt="icon"
              />
              <img
                className={style.imag2}
                src="/imagefolder/Component 16.png"
                alt="icon"
              />
              <img
                className={style.imag3}
                src="/imagefolder/Component 17.png"
                alt="icon"
              />
              <img
                className={style.imag4}
                src="/imagefolder/Component 18.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <Link to="/Question2" className={style.button}>
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
