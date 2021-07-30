import React from "react";
import classes from "./topbanner.module.css";

const Banner = (props) => {
  //const { posts } = this.props;
  return (
    <div className={classes.IsPreload}>
      {props.bannertitle.map((bannertitle) => (
        <section key={bannertitle.id} className={classes.Banner}>
          <div className={classes.Inner}>
            <h1 className={classes.h1}> {bannertitle.heading}</h1>
            <p className={classes.P}>{bannertitle.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Banner;
