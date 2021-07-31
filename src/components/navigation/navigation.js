import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { Image } from "react-bootstrap";

import MitiniLogo from "../../assets/images/logo.png";
import classes from "./navigation.module.css";
import { NavLink, HashRouter } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <HashRouter>
      <div className={`${classes.Header}`}>
        <div className={classes.LogoNav}>
          <div className={classes.LogoContainer}>
            <NavLink className={classes.Link} to="/">
              <Image className={classes.Logo} src={MitiniLogo}></Image>
            </NavLink>
          </div>

          <ul
            className={
              click
                ? `${classes.NavOptions} ${classes.Active}`
                : classes.NavOptions
            }
          >
            <li className={classes.Option} onClick={closeMobileMenu}>
              <NavLink className={classes.Link} to="/">
                about us
              </NavLink>
            </li>
            <li className={classes.Option} onClick={closeMobileMenu}>
              <NavLink className={classes.Link} to="service">
                our services
              </NavLink>
            </li>

            <li className={classes.Option} onClick={closeMobileMenu}>
              <NavLink className={classes.Link} to="contact">
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.MobileMenu} onClick={handleClick}>
          {click ? (
            <CloseMenu className={classes.MenuIcon} />
          ) : (
            <MenuIcon className={classes.MenuIcon} />
          )}
        </div>
      </div>
    </HashRouter>
  );
};

export default Header;
