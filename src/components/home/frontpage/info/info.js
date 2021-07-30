import React from "react";
import classes from "./info.module.css";

const Information = (props) => {
  return (
    <div className={classes.Inner}>
      <section>
        <div>
          <h2 className={classes.Heading}>{props.heading}</h2>
        </div>
        <article>
          <div>
            <ul>
              {props.info.map((infovalue) => (
                <li className={classes.List} key={infovalue.id}>
                  {infovalue.details}
                </li>
              ))}
            </ul>
          </div>
        </article>
        <section>
          <div>
            <h2 className={classes.Heading}>{props.missionheading}</h2>
            <p>
              {props.ourmission.map((value) => (
                <span key={value}>{value.missionstatement}</span>
              ))}
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Information;
