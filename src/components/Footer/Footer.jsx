import React, { useState } from "react";
import classes from "./Footer.module.css";
import Logo from "../Icons/Logo";
import IconFacebook from "../Icons/IconFacebook";
import IconTwitter from "../Icons/IconTwitter";
import IconPinterest from "../Icons/IconPinterest";
import IconInstagram from "../Icons/IconInstagram";
const features = ["Link Shortening", "Branded Links", "Analytics"];
const resources = ["Blog", "Developers", "Support"];
const company = ["About", "Our Team", "Careers", "Contact"];

const Footer = () => {
  const [activateFacebook, setActivateFacebook] = useState(false);
  const [activateTwitter, setActivateTwitter] = useState(false);
  const [activatePinterest, setActivatePinterest] = useState(false);
  const [activateInstagram, setActivateInstagram] = useState(false);

  return (
    <footer className={classes.footer}>
      <div>
        <Logo fill={"#fff"} />
      </div>
      <div>
        <h3>Features</h3>
        <ul className={classes.list}>
          {features.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul className={classes.list}>
          {resources.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul className={classes.list}>
          {company.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.icons}>
        <ul>
          <li
            onMouseEnter={() => setActivateFacebook(true)}
            onMouseLeave={() => setActivateFacebook(false)}
          >
            <IconFacebook
              fill={activateFacebook ? "hsl(180, 66%, 49%)" : "#fff"}
            />
          </li>
          <li
            onMouseEnter={() => setActivateTwitter(true)}
            onMouseLeave={() => setActivateTwitter(false)}
          >
            <IconTwitter
              fill={activateTwitter ? "hsl(180, 66%, 49%)" : "#fff"}
            />
          </li>
          <li
            onMouseEnter={() => setActivatePinterest(true)}
            onMouseLeave={() => setActivatePinterest(false)}
          >
            <IconPinterest
              fill={activatePinterest ? "hsl(180, 66%, 49%)" : "#fff"}
            />
          </li>
          <li
            onMouseEnter={() => setActivateInstagram(true)}
            onMouseLeave={() => setActivateInstagram(false)}
          >
            <IconInstagram
              fill={activateInstagram ? "hsl(180, 66%, 49%)" : "#fff"}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
