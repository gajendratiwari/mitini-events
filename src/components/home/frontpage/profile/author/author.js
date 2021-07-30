import React, { Component } from "react";
import classes from "./author.module.css";
import Person from "../persons/persons";

class Authors extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <section className={classes.Wrapper}>
          <div className={classes.Inner}>
            <header className={classes.Special}>
              {this.props.authorsIntro.map((info) => {
                return (
                  <div key={info.id}>
                    <h2>{info.heading}</h2>
                    <p className={classes.P}>{info.description}</p>
                  </div>
                );
              })}
            </header>
            <Person {...this.props} />
          </div>
        </section>
      </div>
    );
  }
}

export default Authors;
