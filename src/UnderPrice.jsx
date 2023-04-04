import React from "react";
import "./UnderPrice.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const CardData = (props) => {
  const serving1 =
    props.currency === "$" ? props.serving1 : props.serving1 * 19.23;
  const serving2 =
    props.currency === "$" ? props.serving2 : props.serving2 * 19.23;

  return (
    <div className="card-container">
      <div className="link">
        <Link to={props.path}>
          <img src={props.src} />
          <h3 className="card-content">
            <Link to={props.path}>{props.cont}</Link>
          </h3>
          <div className="card-money">
            {serving1.toFixed(0)}
            {props.currency} RECIPE / {serving2.toFixed(2)}
            {props.currency} SERVING
          </div>
        </Link>
      </div>
    </div>
  );
};

const UnderPrice = () => {
  const [currency, setCurrency] = useState("$");
  const [titlechange, setTitleChange] = useState("10");
  const [titlechange2, setTitleChange2] = useState("Under");

  const handleCurrencyChange = () => {
    setCurrency(currency === "$" ? "TL" : "$");
    setTitleChange(currency === "TL" ? "10" : "70");
    setTitleChange2(currency === "TL" ? "Under" : "Above");
  };

  return (
    <div className="full-body-first">
      <div className="full-body-second">
        <div className="wrapper">
          <h1>
            {titlechange2} {titlechange} {currency}
          </h1>
          <div className="line"></div>
        </div>
        <div className="cards">
          <div className="animate__animated animate__backInLeft">
            <CardData
              src="images/Frittata.jpg"
              cont="HOW TO MAKE A FRITTATA"
              serving1={5.11}
              serving2={0.85}
              currency={currency}
            />
          </div>
          <div className="animate__animated animate__backInDown">
            <CardData
              src="images/Quesadillas.png"
              cont="SPINACH QUESADILLAS"
              serving1={3.99}
              serving2={1}
              currency={currency}
            />
          </div>

          <div className="animate__animated animate__backInUp">
            <CardData
              src="images/Vegan-Creamy.png"
              cont="VEGAN CREAMY RAMEN"
              serving1={5.9}
              serving2={2.75}
              currency={currency}
            />
          </div>

          <div className="animate__animated animate__backInRight">
            <CardData
              src="images/Veg Curry.png"
              cont="15-MIN VEGETABLE CURRY"
              serving1={5.93}
              serving2={1.48}
              currency={currency}
            />
          </div>
        </div>

        <div className="button">
          <Link to="/">
            <Button
              className="btns"
              buttonStyle="btn--green"
              buttonSize="btn--large"
            >
              More Budget Recipes
            </Button>
          </Link>

          <Button
            className="btns"
            buttonStyle="btn--green"
            buttonSize="btn--large"
            onClick={handleCurrencyChange}
          >
            {currency === "$" ? "Change to TL" : "Change to $"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnderPrice;
