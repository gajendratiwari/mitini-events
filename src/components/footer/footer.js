import React from "react";
import classes from "./footer.module.css";
import { NavLink, HashRouter } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Inner}>
        <div className={classes.Content}>
          <section className={classes.Section}>
            <h3 className={classes.h3}>MEतिनी Events</h3>
            <p>
              The team at MEतिनी Events have all been chosen based on their love
              and flair for organising and styling events. In order to achieve
              that memorable event or occasion it needs a passionate and
              creative team to bring it all together.
              <br />
              We have that team and we guarantee quality, every time.
            </p>
          </section>
          <HashRouter>
            <section className={classes.Section}>
              <h4 className={classes.h4}>Company</h4>
              <ul className={classes.List}>
                <li className={classes.ListItem}>
                  <NavLink className={classes.A} to="/">
                    About Us
                  </NavLink>
                </li>
                <li className={classes.ListItem}>
                  <NavLink className={classes.A} to="/service">
                    Our Services
                  </NavLink>
                </li>
                <li className={classes.ListItem}>
                  <NavLink className={classes.A} to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </section>
          </HashRouter>
          <section className={classes.Section}>
            <h4 className={classes.h1}>Get In Touch</h4>
            <ul className={classes.List}>
              <li className={classes.ListItem}>
                <a className={classes.A} href="#">
                  <i class="icon fa-twitter">&nbsp;</i>Twitter
                </a>
              </li>
              <li className={classes.ListItem}>
                <a
                  className={classes.A}
                  href="https://www.facebook.com/Mitini-The-Events-Planner-106762064782884"
                >
                  <i class="icon fa-facebook">&nbsp;</i>Facebook
                </a>
              </li>
              <li className={classes.ListItem}>
                <a className={classes.A} href="#">
                  <i class="icon fa-instagram">&nbsp;</i>Instagram
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className={classes.Copyright}>&copy; MEतिनी Events</div>
      </div>
    </footer>
  );
};
export default Footer;
