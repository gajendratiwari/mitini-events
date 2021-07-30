import React, { Component } from "react";
import classes from "./servicelist.module.css";
import data from "../../../assets/database";
import Header from "./header";
import Location from "../location/location";
import Contact from "../contact/contact";
import { Image } from "react-bootstrap";
class ServiceList extends Component {
  render() {
    return (
      <div>
        {data.map((data, key) => {
          return <Header key={key} data={data.services} />;
        })}

        <div>
          {data.map((data, key) => {
            return (
              <div className={classes.Flex} key={key}>
                {data.serviceitems.map((data, key) => {
                  return (
                    <div key={key} className={classes.FlexItem}>
                      <section>
                        <article>
                          <Image className={classes.Image} src={data.image} />
                          <div className={classes.Heading}>{data.heading}</div>
                          <div>{data.about}</div>
                        </article>
                      </section>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Contact />
        <Location />
      </div>
    );
  }
}

export default ServiceList;
