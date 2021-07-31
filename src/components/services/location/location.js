import React, { Component } from "react";
import classes from "./location.module.css";
import data from "../../../assets/database";

import Button from "../../button/button";

class Location extends Component {
  render() {
    const routeChange = () => {
      window.location.href = "/contact#/contact";
    };
    return (
      <>
        {data.map((value) => {
          return (
            <div className={classes.FlexLocation}>
              {value.location.map((data) => {
                return (
                  <div className={classes.Row}>
                    <div className={classes.Column}>
                      <img className={classes.LocationImage} src={data.image} />
                    </div>
                    <div className={classes.Column}>
                      <div className={classes.Content}>
                        <div className={classes.Text}>
                          <h1 className={classes.Heading1}>LOCATION</h1>
                          <p className={classes.P1}>
                            We are located in Gharipatan and cater to Pokhara
                            and surrounding regions.
                          </p>
                        </div>

                        <div className={classes.Button}>
                          <Button
                            handleClick={routeChange}
                            label="Enquire/book"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}
export default Location;
