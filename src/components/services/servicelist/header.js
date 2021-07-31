import React from "react";
import classes from "./servicelist.module.css";

const Header = (props) => {
  return (
    <div>
      {props.data.map((value, key) => {
        return (
          <div className={classes.Header} key={key}>
            <div>
              <div className={classes.Heading}>{value.heading}</div>

              <div className={classes.Description}>{value.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Header;
