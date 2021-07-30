import classes from "./button.module.css";
import React from "react";

function Button(props) {
  return (
    <button className={classes.Button} onClick={props.handleClick}>
      {props.label}
    </button>
  );
}

export default Button;
