import React, { useState } from "react";
import classes from "./ShortLink.module.css";

const ShortLink = (props) => {
  const copyHandler = () => {
    props.onGetCopiedLink(props.link["full_short_link"]);
    navigator.clipboard.writeText(props.link["full_short_link"]);
  };

  return (
    <li className={classes["list-item"]}>
      <div className={classes.original}>{props.link["original_link"]}</div>
      <div
        className={
          props.isCopied
            ? `${classes.shortened} ${classes.copied}`
            : classes.shortened
        }
      >
        <span>{props.link["full_short_link"]}</span>
        <button onClick={copyHandler}>
          {props.isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
};

export default ShortLink;
