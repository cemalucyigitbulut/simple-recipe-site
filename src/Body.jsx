import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineSearch } from "react-icons/ai";

const Body = () => {
  return (
    <div className="body-container">
      <video src="/videos/pot2.mp4" autoPlay loop muted />
      <h1>Welcome to Home </h1>
      <p>your go-to source for delicious and easy-to-follow recipes!"</p>
      <div className="body-btns">
        <input type="text" placeholder="Search Recipes" />

        <div className="buttonz">
          <Link to="/first">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Search
            </Button>
          </Link>
          {/* <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large">I Beg Of You <GrPlayFill className="GrPlayFill"/> </Button> */}
          {/* <Link to="/">
            <Button
              className="btns-2"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Click On Me
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
