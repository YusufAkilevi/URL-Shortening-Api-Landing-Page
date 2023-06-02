import React, { useState } from "react";
import classes from "./UrlShorten.module.css";
const UrlShorten = (props) => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputChangeHandler = (event) => {
    setEnteredUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUrl === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    const fetchShortenedUrl = async () => {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${enteredUrl}/`
      );
      const urlData = await res.json();

      props.onSendLink(urlData);
    };
    fetchShortenedUrl();
  };
  return (
    <>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputBox}>
            <input
              className={`${!isValid ? classes.invalid : ""}`}
              onChange={inputChangeHandler}
              type="text"
              placeholder="Shorten a link here...
            "
            />
          </div>
          <div className={classes.buttonBox}>
            <button>Shorten It!</button>
          </div>
        </form>
        {!isValid && <p>Please add a link.</p>}
      </div>
    </>
  );
};
export default UrlShorten;
