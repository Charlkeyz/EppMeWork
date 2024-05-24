import React from "react";
import stylebutton from "./button.module.css";

const Button = ({ children, style }) => {
  return (
    <div>
      <button className={`${stylebutton.book}`} style={style}>
        {children}
      </button>
    </div>
  );
};

export default Button;
