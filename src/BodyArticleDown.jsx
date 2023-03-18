import React from 'react'
import BodyArticles from './BodyArticles'
import { Link } from 'react-router-dom'
import "./BodyArticleDown.css"

const BodyArticleDown = () => {
  return (
    <div className='BodyArticleDown'>
      <div className="BodyArticles-wrapper">
      <BodyArticles src="images/salad.jpg" text="If you're passionate about kitchen organization, you need the YouCopia SpiceStack." title="This Is the Best Spice Rack for Small Spaces" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Durable Dutch ovens come at a variety of price points. Get yourself one and use it every day for the rest of your life." title="The Best Dutch Oven for Every Budget" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Take 25% off our favorite cutting boards, ceramics, and kitchen shears." title="The Best Deals to Shop at the Material Kitchen Birthday Sale" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Do you need one? Probably not. Should you get one? Almost certainly." title="These Are the Best Air Fryers, Because We Are All Air Fry People Now" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Whether you like your clusters nutty, grain-free, or not too sweet, we've got a granola pick for you." title="The 10 Best Granola Brands, According to Bon Appétit Editors" path="/"/>
      <BodyArticles src="images/salad.jpg" text="Never pay $9 for a green juice again." title="The Best Juicer Is Quiet, Powerful, and Will Outlive Any Fad Diet" path="/"/>
    </div>
    </div>
  )
}

export default BodyArticleDown
