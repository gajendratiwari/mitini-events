import React from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./contactform.module.css";

require("dotenv").config();

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const templateid = process.env.REACT_APP_TEMPLATE_ID;
    const userid = process.env.REACT_APP_USER_ID;

    if (this.validate()) {
      emailjs.sendForm("gmail", templateid, e.target, userid).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        {}
      );
      e.target.reset();
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length != 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!input["date"]) {
      isValid = false;
      errors["date"] = "Please enter correct date.";
    }

    if (typeof input["date"] !== "undefined") {
      var pattern = new RegExp(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      );
      if (!pattern.test(input["date"])) {
        isValid = false;
        errors["date"] = "Please enter correct date.";
      }
    }

    if (!input["venue"]) {
      isValid = false;
      errors["venue"] = "Please enter the venue";
    }
    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your comment.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className={classes.FlexBox}>
        <h1>Contact us today.</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="name">
              Name: <span className={classes.Required}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter name"
              id="name"
            />

            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div className="form-group">
            <label for="email">
              Email Address:<span className={classes.Required}>*</span>
            </label>
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            <label for="Phone">
              Phone:<span className={classes.Required}>*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter phone"
              id="phone"
            />

            <div className="text-danger">{this.state.errors.phone}</div>
          </div>
          <div className="form-group">
            <label for="Date">
              Date:<span className={classes.Required}>*</span>
            </label>
            <input
              type="text"
              name="date"
              value={this.state.input.date}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Wedding/event date in this M/D/YYYY format"
              id="date"
            />

            <div className="text-danger">{this.state.errors.date}</div>
          </div>
          <div className="form-group">
            <label for="Venue">
              Venue:<span className={classes.Required}>*</span>
            </label>
            <input
              type="text"
              name="venue"
              value={this.state.input.venue}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter venue"
            />

            <div className="text-danger">{this.state.errors.venue}</div>
          </div>

          <div className="form-group">
            <label for="comment">
              Message:<span className={classes.Required}>*</span>
            </label>
            <textarea
              name="comment"
              value={this.state.input.comment}
              onChange={this.handleChange}
              placeholder="Tell us a little more (are you after flowers,hire, styling or planning)"
              className="form-control"
            />

            <div className="text-danger">{this.state.errors.comment}</div>
          </div>

          <input type="submit" value="Send" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
