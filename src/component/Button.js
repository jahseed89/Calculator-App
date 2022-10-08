import React from "react";
import "./button.css";

const Button = ({ btnNum, clickHandler, className = "btn", value }) => {
  return (
    <button type="button" onClick={clickHandler} className={className} value={value}>
      {btnNum}
    </button>
  );
};
export default Button;
