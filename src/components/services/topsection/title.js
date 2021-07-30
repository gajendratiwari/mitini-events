import React from "react";
import classes from "./title.module.css";
import { Image } from "react-bootstrap";
const Title = (props) => {
  return (
    <div>
      <h1 className={classes.H1}>
        Transforming spaces to create memories for weddings and events
      </h1>
      <div className={classes.Container}>
        <div className={classes.FlexBox}>
          {props.value.map((data) => (
            <div className={classes.Row}>
              <div className={classes.Column}>
                <h1 className={classes.Heading}>{data.heading} </h1>
                <Image className={classes.LocationImage} src={data.image} />
                <p className={classes.Paragraph}>{data.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Title;
