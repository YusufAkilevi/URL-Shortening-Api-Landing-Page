import React, { useState } from "react";
import NavItem from "./NavItem";
import classes from "./Navigation.module.css";

const navItemsLeft = ["Features", "Pricing", "Resources"];
const navItemsRight = ["Login", "Sign Up"];

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const clickHandler = () => {
    setIsMobile((prevState) => !prevState);
  };

  return (
    <>
      {isMobile ? (
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
      ) : (
        ""
      )}
      <div className={classes.mobileNav}>
        <button onClick={clickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Navigation;
