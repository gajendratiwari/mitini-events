import React from "react";
import classes from "./contact.module.css";
import Button from "../../button/button";
import { useHistory } from "react-router-dom";
import data from "../../../assets/database";

const Contact = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/contact`;
    history.push(path);
  };
  return (
    <>
      {data.map((value) =>
        value.contact.map((data) => {
          return (
            <div key={data.id}>
              <div className={classes.MainDiv}>
                <h1 className={classes.ContactHeading}>{data.heading}</h1>
                <p className={classes.Contact}>{data.details}</p>{" "}
              </div>

              <Button
                handleClick={routeChange}
                label="Fill Out Our Contact Form Here"
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default Contact;
