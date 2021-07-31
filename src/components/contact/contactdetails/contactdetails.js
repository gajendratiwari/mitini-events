import React from "react";
import classes from "./contactdetails.module.css";
import { Image } from "react-bootstrap";

const ContactDetails = (props) => {
  return (
    <div>
      {props.data.map((value) => {
        return (
          <div key={value} className={classes.Container}>
            <div className={classes.LeftCol}>
              <h2 className={classes.H1}>{value.heading}</h2>
              <br />
              <p>{value.details}</p>
              <br />
              <p>
                <span> Phone: {value.phone}</span>
                <br />
                <span>Email: {value.email}</span>
                <br />
                <br></br>
                <strong>{value.title}</strong> <br></br> {value.address}
              </p>
            </div>

            <div className={classes.RightCol}>
              <Image className={classes.ContactImage} src={value.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
