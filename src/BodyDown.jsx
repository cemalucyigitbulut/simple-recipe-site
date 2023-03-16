import React from "react";
import "./BodyDown.css";
import CardInside from "./CardInside";

const BodyDown = () => {
  return (
    <div className="BodyDown">
      <h1>What to Cook Tonight</h1>
      <p>Fast, fresh, and foolproof</p>
      <div className="bodydown-container">
        <CardInside
          src="images/Noodles.jpg"
          text="These peanut butter noodles have “a depth of flavor and
                dimension that belies what a fast, easy, flexible."
          title="Peanut Noodles"
          path="/"
        />

        <CardInside
          src="images/burger.jpg"
          text="Dry burgers? We dont know them..."
          title="Juicier Turkey"
          path="/"
        />

        <CardInside
          src="images/Spicy.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Spicy Rigatoni"
          path="/"
        />

<CardInside
          src="images/deviled.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Deviled Eggs"
          path="/"
        />

<CardInside
          src="images/sticky ricel.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Mango Sticky Rice"
          path="/"
        />


<CardInside
          src="images/pad thai.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Pad Thai"
          path="/"
        />


<CardInside
          src="images/Matzo.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Matzo Brei"
          path="/"
        />


<CardInside
          src="images/pasta.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Simple Pasta"
          path="/"
        />


<CardInside
          src="images/sloppy.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Sloppy Joes"
          path="/"
        />


<CardInside
          src="images/lasagna.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Ricotta Lasagna"
          path="/"
        />

      </div>
    </div>
  );
};

export default BodyDown;
