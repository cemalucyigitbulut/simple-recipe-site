import React from "react";
import "../Css/WeeklyT.css";

const ReadyMadeMeals = (props) => {
  return (
    <div className="ready-made">
      <div className="ready-image-cont">
        <img className="ready-image" src={props.src} alt="no-img-test" />
      </div>
      <div className="ready-info">
        <div className="ready-title">{props.title}</div>
        <div className="ready-text">{props.text}</div>
        <div className="ready-tags">
          {props.tags.map((tag, index) => (
            <DynamicTag
              key={index}
              tag={tag.tag}
              color={tag.color}
              className={tag.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DynamicTag = (props) => {
  return (
    <div
      className={`dynamic-tag ${props.className}`}
      style={{ backgroundColor: props.color }}
    >
      <p className="dynamic-tag-tag">{props.tag}</p>
    </div>
  );
};

const WeeklyT = () => {
  return (
    <div className="MainWeekly">
      <div className="WeeklyTitleMain">
        <div className="WeeklyTitle">
          <h1>Explore our Flexible Weekly Menu</h1>
        </div>
        <div className="WeeklyTitleText">
          <p>Choose from 35 healthy, restaurant-quality meals each week</p>
        </div>
      </div>

      <div className="TitleContainer">
        <div className="WeeklyMiniTitleMain">
          <div className="WeeklyMiniTitle">
            <h2>Ready-made meals</h2>
           <p>
              Fresh meals that arrive ready to heat, eat and enjoy in minutes.
            </p>
          </div>
        </div>
      </div>
      <div className="MainWeeklyContainer">
        <div className="WeeklyCardContainer">
          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />

          <ReadyMadeMeals
            src="images/CreamyParmesan.jpg"
            title="Creamy Parmesan Chicken"
            text="with Broccoli & Tomatoes"
            tags={[
              { tag: "Keto", color: "#f4f007" },
              { tag: "Protein Plus", color: "#0865f5" },
              { tag: "Calorie Smart", color: "#07f4e9" },
              { tag: "Vegetarian", color: "#6beda4" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklyT;
