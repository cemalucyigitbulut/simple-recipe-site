import React from "react";
import "./LearnHow.css"

const LearnHow = () => {
  return (
    <div className="main-container">
      <div className="second-container">
        <h1>Learn How To </h1>
        <div className="third-container">
          <div class="tutorial-wrapper">
            <div class="tutorial">
              <img src="path-to-image" alt="tutorial image" />
              <div class="tutorial-content">
                <h3>Tutorial Title</h3>
                <p>Tutorial description</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnHow;
