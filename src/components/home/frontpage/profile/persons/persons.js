import React, { Component } from "react";
import classes from "./person.module.css";
import { Image } from "react-bootstrap";
class Person extends Component {
  render() {
    return (
      <div>
        <div className={classes.Testimonials}>
          {this.props.employee.map((info, idx) => {
            return (
              <div key={idx}>
                <section>
                  <div className={classes.Content}>
                    <blockquote className={classes.Blockquote}>
                      <p>{info.about}</p>
                    </blockquote>
                    <div className={classes.Author}>
                      <div className={classes.Image}>
                        <Image
                          className={classes.Img}
                          src={info.image}
                          alt=""
                        ></Image>
                      </div>
                      <p className={classes.Credit}>
                        - <strong>{info.name},</strong>
                        <span>{info.position}</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Person;
{
}
