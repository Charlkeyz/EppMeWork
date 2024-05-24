import React from "react";
import style from "./howitworks.module.css";

const HowItWorks = () => {
  return (
    <div className={style.container}>
      <div className={style.cleaner}>
        <img
          className={style.image}
          src="\medium-shot-man-cleaning-table 3.png"
          alt="A man cleaning"
        />
      </div>
      <div className={style.works_container}>
        <h4 className={style.header}>How it works</h4>
        <div className={style.header_container}></div>

        <div className={style.list_container}>
          <p className={style.first_1}> </p>

          <p className={style.second_2}> </p>
          <p className={style.third_3}> </p>
          <p className={style.four_4}> </p>

          <ol className={style.para_container}>
            <li className={style.para_1}>
              <img className={style.one} src="\1.png" alt="number one" />
              Find trustworthy and dependable service providers in your local
              community
            </li>
            <br />
            <li className={style.para_2}>
              <img className={style.two} src="\2.png" alt="number two" />
              Get the best available and verified worker <p> for the job</p>
            </li>
            <br />

            <li className={style.para_3}>
              <img className={style.three} src="/3.png" alt="number three" />
              Contact the selected workers and request service
            </li>
            <br />

            <li className={style.para_4}>
              <img className={style.four} src="/4.png" alt="number two" />
              Like and Rate the service providers
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
