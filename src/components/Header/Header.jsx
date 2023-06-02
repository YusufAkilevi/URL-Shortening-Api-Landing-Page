import React from "react";
import classes from "./Header.module.css";
import Logo from "../Icons/Logo";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
