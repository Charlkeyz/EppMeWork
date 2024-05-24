import React from "react";
import style from "./emailsent.module.css";

const EmailSent = () => {
  return (
    <div className={style.email_container}>
      <div className={style.email}>
        <h3 className={style.header}>Email sent!</h3>
        <p className={style.header_para}>
          A reset instruction has been sent to your email
        </p>
      </div>
      <div className={style.image_div}>
        <img src="/imagefolder/mail 1.png" />
      </div>
    </div>
  );
};

export default EmailSent;
