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
      <div>
        <div className={classes.MainDiv}>
          <h1 className={classes.ContactHeading}>CONTACT US</h1>
          <p className={classes.Contact}>
            Contact us on ********** or mitinievents@gmail.com or click the link
            below to complete our online contact form and we'll get back to you.
          </p>
        </div>

        <Button
          handleClick={routeChange}
          label="Fill Out Our Contact Form Here"
        />
      </div>
    </>
  );
};

export default Contact;
