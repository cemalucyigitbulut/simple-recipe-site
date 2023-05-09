import React from "react";
import "../Css/NewsTeller.css";
import Button from "./Button";

const NewsTeller = () => {
  return (
    <div>
      <div className="something">
        <div className="contents">
          <div>
            <h1>Subscribe for Exclusive Offers & More</h1>
          </div>
          <div className="parag">
            <h3>
              Sign up for our newsletter, and you'll be the first to receive
              exclusive offers, new product announcements, and lifestyle content
              from our wellness experts.
            </h3>
          </div>

          <input
            type="text"
            className="inputt"
            placeholder="Enter Your Email"
            autoComplete="email"
          />
         <div className="buttonn">
          <Button
            className="btns"
            buttonStyle="btn--green"
            buttonSize="btn--large"
          >
            Subscribe
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTeller;
