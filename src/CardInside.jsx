import React from "react";
import { Link } from "react-router-dom";
import "./CardInside.css";

const CardInside = (props) => {
  return (
    <>
      <div class="container">
        <div class="card">
          <img src={props.src} />
          <div className="card-title">{props.title}</div>
          <div class="card__content">
            <p>{props.text}</p>
            <Link to={props.path}>Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInside;
