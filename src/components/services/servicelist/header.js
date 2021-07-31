import React from "react";
import classes from "./servicelist.module.css";

const Header = () => {
  return (
    <div>
      <div className={classes.Header}>
        <div>
          <div className={classes.Heading}>OUR SERVICES INCLUDE</div>

          <div className={classes.Description}>
            We offer a complete conference and event management service covering
            all aspects detailed below, but are also happy to tailor a package
            that offers only what you need, to support your inhouse team.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
