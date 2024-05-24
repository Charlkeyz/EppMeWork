import React from "react";
import style from "./ourmission.module.css";

const OurMission = () => {
  return (
    <div className={style.container}>
      <div className={style.mission}>
        <div className={style.flex_container}>
          <div className={style.header}>
            <h4 className={style.heading}>
              Our Mission is to Simplify Finding Artisans
            </h4>
          </div>

          <div className={style.eclipse}>
            <img src="/imagefolder/Ellipse 36.png" alt="Eclipse logo" />
          </div>
          <p className={style.paragraph}>
            At EppMeWork, our dedicated mission revolves around transforming the
            way you discover and engage with skilled artisans. We are committed
            to redefining simplicity in the process, ensuring that finding the
            right artisans for your needs is not only efficient but also a
            seamless and stress-free experience. Join our community and witness
            a new era of simplicity in connecting with artisans who bring your
            projects to life. At EppMeWork, we're not just simplifying the
            search; we're enhancing the way you collaborate with skilled
            professionals.
          </p>
        </div>
      </div>
      <div className={style.imag_container}>
        <img
          className={style.image}
          src="\Frame 1000005327.png"
          alt="A woman standing"
        />
      </div>
    </div>
  );
};

export default OurMission;
