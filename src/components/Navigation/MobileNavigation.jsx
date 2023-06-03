import React from "react";
import classes from "./MobileNavigation.module.css";
import NavItem from "./NavItem";
const navItemsLeft = ["Features", "Pricing", "Resources"];
const navItemsRight = ["Login", "Sign Up"];
const MobileNavigation = () => {
  return (
    <div className={classes.nav}>
      <ul className={classes["nav-list-left"]}>
        {navItemsLeft.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))}
      </ul>
      <ul className={classes["nav-list-right"]}>
        {navItemsRight.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
