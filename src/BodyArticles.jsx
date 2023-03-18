import React from "react";
import './BodyArticle.css'
import { Link } from 'react-router-dom'


const BodyArticles = (props) => {
  return (
    <div>
      <div className="box-container">
        <div className="article-box">
          <img className="article-image" src={props.src} />
          <div className="article-title">
            <Link to={props.path}>{props.title}</Link>
          </div>
          <div className="article-text">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyArticles;
