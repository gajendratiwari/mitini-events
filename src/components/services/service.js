import React, { Component } from "react";
import classes from "./service.module.css";
import Banner from "./banner/banner";
import Title from "./topsection/title";
import data from "../../assets/database";
import ServiceList from "./servicelist/servicelist";

class Service extends Component {
  render() {
    return (
      <div className={classes.Body}>
        <Banner />
        <div>
          {data.map((info) => {
            return (
              <div key={info.id}>
                <Title value={info.serviceheighlights} />
              </div>
            );
          })}
        </div>
        <ServiceList />
        
      </div>
    );
  }
}

export default Service;
