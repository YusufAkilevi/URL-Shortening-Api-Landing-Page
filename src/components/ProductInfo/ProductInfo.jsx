import React from "react";
import ShortLink from "../UrlShorten/ShorLink";

import classes from "./ProductInfo.module.css";
import IconBrandRecognition from "../Icons/IconBrandRecognition";
import IconDetailedRecords from "../Icons/IconDetailedRecords";
import IconFullyCustomizable from "../Icons/IconFullyCustomizable";
const ProductInfo = (props) => {
  return (
    <div className={classes["product-info"]}>
      <ul>
        {props.shortenedLinks.map((link) => (
          <ShortLink
            onGetCopiedLink={props.onGetCopiedLink}
            isCopied={props.copiedLink === link.result["full_short_link"]}
            key={link.result.code}
            link={link.result}
          />
        ))}
      </ul>
      <div className={classes.statistics}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes.icon}>
            <IconBrandRecognition />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.card}>
          <div className={classes.icon}>
            <IconDetailedRecords />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={classes.card}>
          <div className={classes.icon}>
            <IconFullyCustomizable />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
