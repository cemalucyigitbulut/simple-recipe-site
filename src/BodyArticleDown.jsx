import React from 'react'
import BodyArticles from './BodyArticles'
import { Link } from 'react-router-dom'
import "./BodyArticleDown.css"

const BodyArticleDown = () => {
  return (
    <div className='BodyArticleDown'>
      <BodyArticles src="images/salad.jpg" text="Hello" title="Hello" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Hello" title="Hello" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Hello" title="Hello" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Hello" title="Hello" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Hello" title="Hello" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Hello" title="Hello" path="/"/>
    </div>
  )
}

export default BodyArticleDown
