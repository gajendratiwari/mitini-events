import React from "react";
import classes from "./block.module.css";
import Button from "../../../button/button";
import { useHistory } from "react-router-dom";
const Block = (props) => {
  const history = useHistory();
  const routeChange = () => {
    let path = `/contact`;
    history.push(path);
  };

  return (
    <div>
      {props.blockvalue.map((data) => {
        return (
          <div key={data.id}>
            <section className={classes.BlockBackground}>
              <div className={classes.Inner}>
                <h2>{data.heading}</h2>
                <br></br>
                <p className={classes.P1}>{data.description}</p>
              </div>
              <Button
                handleClick={routeChange}
                label="Fill Out Our Contact Form Here"
              />
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Block;
