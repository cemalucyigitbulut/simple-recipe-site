import React from "react";
import "./BodyDown.css";
import CardInside from "./CardInside";
import "animate.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const BodyDown = () => {
  // Animasyon Göründümü

  const [isAnimated, setIsAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (girisler) => {
        const giris = girisler[0];
        if (giris.isIntersecting) {
          setIsAnimated(true);
        }
      },
      {
        threshold: 0.2, // tam gözükmeden çalışmaz / 0.5 yarısı gözüksede çalışır
      }
    );
    observer.observe(cardRef.current);

    return ()=>{
     observer.disconnect();
    }

  }, []);

  return (
    <div className="BodyDown">
      <h1>What to Cook Tonight</h1>
      <p>Fast, fresh, and foolproof</p>
      {/* <div className="animate__animated animate__lightSpeedInLeft"> */}
      <div className="bodydown-container">
        
        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
          <CardInside
            src="images/Noodles.jpg"
            text="These peanut butter noodles have “a depth of flavor and
                dimension that belies what a fast, easy, flexible."
            title="Peanut Noodles"
            path="/"
          />
        </div>


        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/burger.jpg"
          text="Dry burgers? We dont know them..."
          title="Juicier Turkey"
          path="/"
        />
         </div>

         <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/Spicy.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Spicy Rigatoni"
          path="/"
        />
        </div>

       <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/deviled.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Deviled Eggs"
          path="/"
        />
        </div>
  
        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/sticky ricel.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Mango Sticky Rice"
          path="/"
        />
        </div>
        

        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/pad thai.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Pad Thai"
          path="/"
        />
        </div>

        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/Matzo.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Matzo Brei"
          path="/"
        />
        </div>
        
        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/pasta.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Simple Pasta"
          path="/"
        />
        </div>

        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/sloppy.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Sloppy Joes"
          path="/"
        />
        </div>

        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/lasagna.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Ricotta Lasagna"
          path="/"
        />
        </div>

        <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/Buffalo.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Buffalo Wings"
          path="/"
        />
        </div>
         
         <div ref={cardRef} className={`animate__animated ${isAnimated ? "animate__fadeInDown" : "hiden"}`}>
        <CardInside
          src="images/Stew.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
          title="Coconutty Stew"
          path="/"
        />
        </div>
      </div>
      
      <div className="body-button">
        <div className={`animate__animated ${isAnimated ? "animate__lightSpeedInLeft" : "hiden"}`}>
          <Link to="/first">
            <Button
              className="btns-2"
              buttonStyle="btn--green"
              buttonSize="btn--large"
            >
              More Recipes
            </Button>
          </Link>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default BodyDown;
