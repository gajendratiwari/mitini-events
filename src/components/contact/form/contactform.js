import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./contactform.module.css";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.css";
import "./contact.css";
require("dotenv").config();
const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("Message");
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const statusMessage = document.querySelector(".status-message");
    const form = document.querySelector("#contact-form");

    const templateid = process.env.REACT_APP_TEMPLATE_ID;
    const userid = process.env.REACT_APP_USER_ID;

    emailjs.sendForm("gmail", templateid, "#contact-form", userid).then(
      function (response) {
        setStatusMessage(
          "Thank you for contacting us. We have received your enquiry and will respond to you within 24 hours. For urgent enquiries please call us on one of our telephone number."
        );
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },

      function (error) {
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
    e.target.reset();
    form.myButton.disabled = true;

    return true;
  };

  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div className={classes.FlexBox}>
      <h1>Contact us today.</h1>
      <p className="status-message">{statusMessage}</p>

      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* <label htmlFor="inputname">Name : </label> */}
          {errors.name && errors.name.type === "required" && (
            <div className={classes.Error} role="alert">
              Name is required
              <br />
            </div>
          )}
          <input
            className="form-control"
            placeholder="Name"
            name="name"
            autoComplete="off"
            {...register("name", {
              required: "Required",
              pattern: {
                value: /^[a-zA-Z][a-zA-Z ]*$/,
              },
            })}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="Email">Email : </label> */}
          {errors.email && errors.email.type === "required" && (
            <div className={classes.Error} role="alert">
              Enter a valid email address
              <br />
            </div>
          )}
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            type="email"
            autoComplete="off"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="Email">Email : </label> */}
          {errors.phone && errors.phone.type === "required" && (
            <div className={classes.Error} role="alert">
              Enter a valid phone number
              <br />
            </div>
          )}
          <input
            className="form-control"
            name="phone"
            placeholder="Phone (e.g. +977 AB YXX XXX)"
            type="phone"
            autoComplete="off"
            {...register("phone", {
              required: "Required",
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
              },
            })}
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="Email">Email : </label> */}
          {errors.date && errors.date.type === "required" && (
            <div className={classes.Error} role="alert">
              Enter valid date
              <br />
            </div>
          )}
          <input
            className="form-control"
            name="date"
            placeholder="Date"
            type="date"
            autoComplete="off"
            {...register("date", {
              required: "Required",
            })}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="Email">Email : </label> */}
          {errors.venue && errors.venue.type === "required" && (
            <div className={classes.Error} role="alert">
              Enter location
              <br />
            </div>
          )}
          <input
            className="form-control"
            name="venue"
            placeholder="Venue"
            type="venue"
            autoComplete="off"
            {...register("venue", {
              required: "Required",
              pattern: {
                value: /^[a-zA-Z][a-zA-Z ]*$/,
              },
            })}
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="Message">Message : </label> */}
          {errors.message && errors.message.type === "required" && (
            <div className={classes.Error} role="alert">
              Message
              <br />
            </div>
          )}
          <textarea
            className="form-control"
            name="message"
            placeholder="Tell us a little more (are you after flowers,hire, styling or planning)"
            maxLength="1500"
            autoComplete="off"
            {...register("message", {
              required: "Required",
              pattern: {
                value: /^[a-zA-Z][a-zA-Z ]*$/,
              },
            })}
          />
        </div>
        <p className={classes.RemainText}>
          Remaining Text : {messageCharsLeft}
        </p>
        <div className="form-group">
          <input
            className={classes.Button}
            type="submit"
            value="Submit"
            name="myButton"
            className="btn btn-success"
          />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
