import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/FakeTestimonial.css";

const Testimonial = (props) => {
  return (
    <div className={`testimonial ${props.className}`}>
      <img className="test-image" src={props.src} alt="no-img-test" />
      <div className="test-info">
        <div className="test-name">{props.name}</div>
        <Link to={props.path}>
          <div className="test-twitter">{props.twit}</div>
        </Link>
      </div>
      <div className="test-content">{props.content}</div>
    </div>
  );
};

const FakeTestimonial = () => {
  const [showFirstPart, setShowFirstPart] = useState(true);
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [buttonActive, setButtonActive] = useState(null);

  const handleButtonClick = (part) => {
    if (part === 1) {
      setShowFirstPart(true);
      setShowSecondPart(false);
      setButtonActive(1);
    } else if (part === 2) {
      setShowFirstPart(false);
      setShowSecondPart(true);
      setButtonActive(2);
    }
  };

  return (
    <div className="test-main">
      <div className="test-title">
        <h1>Fake Testimonials</h1>
      </div>
      <div className="test-main-container">
        <div className="test-card-container">
          {showFirstPart && (
            <>
              <Testimonial
                src="images/alex.jpg"
                name="Alex Hipp"
                twit="@Alex_Hipp"
                content="I've been using Home Cook for weeks now and it's become my go-to website for meal planning. The recipes are delicious and easy to follow."
                path="/"
                className={`animate__animated ${showFirstPart ? "animate__fadeIn" : ""}`}
              />

              <Testimonial
                src="images/craig.jpg"
                name="Craig Mckay"
                twit="@Craig_Mckay"
                content="As someone who's always on the hunt for new recipes, Home Cook has been a game-changer. I love the variety of dishes available and the helpful tips for each recipe."
                path="/"
                className={`animate__animated ${showFirstPart ? "animate__fadeIn" : ""}`}
              />

              <Testimonial
                src="images/alexander.jpg"
                name="Alexander Suprun"
                twit="@Alexander_Suprun"
                content="I'm not the best cook, but Home Cook has made it easy for me to step up my game in the kitchen. The recipes are simple and the photos make it easy to see what I'm aiming for."
                path="/"
                className={`animate__animated ${showFirstPart ? "animate__fadeIn" : ""}`}
              />

              <Testimonial
                src="images/stefan.jpg"
                name="Stefan Stefancik"
                twit="@Stefan_Stefancik"
                content="Home Cook is my new secret weapon for impressing dinner guests. The recipes are restaurant-quality, but easy enough for me to make at home."
                path="/"
                className={`animate__animated ${showFirstPart ? "animate__fadeIn" : ""}`}
              />
            </>
          )}

          {showSecondPart && (
            <>
              <div className="second-part">
                <Testimonial
                  src="images/oguz.jpg"
                  name="Oguz Yağız"
                  twit="@Oguz_Yağız"
                  content="I love how Home Cook lets me search for recipes based on the ingredients I already have. It's a great way to use up leftovers and avoid waste."
                  path="/"
                  className={`animate__animated ${showSecondPart ? "animate__fadeIn" : ""}`}
                />

                <Testimonial
                  src="images/courtney.jpg"
                  name="Courtney Cook"
                  twit="@Courtney_Cook"
                  content="As a busy mom, Home Cook has made meal planning so much easier for me. I can quickly find recipes that my family will love and that fit into my schedule."
                  path="/"
                  className={`animate__animated ${showSecondPart ? "animate__fadeIn" : ""}`}
                />

                <Testimonial
                  src="images/dahiana.jpg"
                  name="Dahiana Waszaj"
                  twit="@Dahiana_Waszaj"
                  content="I've tried so many recipe websites over the years, but Home Cook is by far my favorite. The recipes are always delicious and the website is so user-friendly."
                  path="/"
                  className={`animate__animated ${showSecondPart ? "animate__fadeIn" : ""}`}
                />

                <Testimonial
                  src="images/charles.jpg"
                  name="Charles Deluvio"
                  twit="@Charles_Deluvio"
                  content="Home Cook has inspired me to try new things in the kitchen. I love the variety of international recipes and the helpful cooking tips that come with each one."
                  path="/"
                  className={`animate__animated ${showSecondPart ? "animate__fadeIn" : ""}`}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="button-cont">
        <button
          onClick={() => handleButtonClick(1)}
          className={`btns ${buttonActive === 1 ? "" : "active"}`}
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`btns ${buttonActive === 2 ? "" : "active"}`}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default FakeTestimonial;
