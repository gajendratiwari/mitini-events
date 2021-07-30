import React from "react";
import classes from "./block.module.css";

const Title = (props) => {
  return (
    <div>
      <section className={classes.Title}>
        <div className={classes.Inner}>
          <h2 className={classes.H1}>{props.title}</h2>
          <p className={classes.P}></p>
        </div>
      </section>
    </div>
  );
};
export default Title;
