import React from 'react'
import { Link } from 'react-router-dom'
import "./Article.css"
import Button from './Button'
import BodyArticleDown from './BodyArticleDown'

const Article = () => {
  return (
    <div className='article-container'>
      <h1>Articles From Us</h1>
      <p>All the stuff you need—and some you don't</p>
       <BodyArticleDown/>
       <div className="buttoncuk"><Link to="/first"><Button buttonStyle="btn--green" buttonSize="btn--large">More Articles</Button></Link></div>
      
    </div>
  )
}

export default Article
