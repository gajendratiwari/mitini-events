import classes from "./premiumservicelist.module.css";
import React, { Component } from "react";
import Button from "../../../../button/button";

class ServiceList extends Component {
  render() {
    const { services } = this.props;
    const routeChange = () => {
      window.location.href = "/#/service";
    };
    return (
      <div>
        <div className={classes.Flex}>
          {services.map((list, sn) => {
            return (
              <div key={sn}>
                <section className={classes.Wrapper}>
                  <div>
                    <div>
                      <article>
                        <header>
                          <h3 className={classes.H2}>
                            {list.heading}
                            <br />
                          </h3>
                        </header>
                        <p className={classes.P}>{list.about}</p>
                        <footer className={classes.Footer}>
                          <Button handleClick={routeChange} label="More.." />
                        </footer>
                      </article>
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

export default ServiceList;
