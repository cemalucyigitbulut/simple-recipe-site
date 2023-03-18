import React from 'react'
import BodyArticles from './BodyArticles'
import { Link } from 'react-router-dom'
import "./BodyArticleDown.css"
import Button from './Button'

const BodyArticleDown = () => {
  return (
    
    <>
    <div className='BodyArticleDown'>
      <div className="BodyArticles-wrapper">
      <BodyArticles src="images/Spice.png" text="If you're passionate about kitchen organization, you need the YouCopia SpiceStack." title="This Is the Best Spice Rack for Small Spaces" path="/"/>
      <BodyArticles src="images/Oven.png" text="Durable Dutch ovens come at a variety of price points. Get yourself one and use it every day for the rest of your life." title="The Best Dutch Oven for Every Budget" path="/"/>
      <BodyArticles src="images/Material.png" text="Take 25% off our favorite cutting boards, ceramics, and kitchen shears and more are on this article." title="The Best Deals to Shop at the Material Kitchen Sale" path="/"/>
      <BodyArticles src="images/AirFry.png" text="Do you need one? Probably not. Should you get one? Almost certainly, no Absolutely." title="These Are the Best Air Fryers, Because We Are All Air Fry " path="/"/>
      <BodyArticles src="images/Brands.png" text="Whether you like your clusters nutty, grain-free, or not too sweet, we've got a granola pick for you." title="The 10 Best Granola Brands, According to Bon Appétit Editors" path="/"/>
      <BodyArticles src="images/Juicer.png" text="Never pay $9 for a green juice again , pay $15 dolar for better replacement or more ?." title="The Best Juicer Is Quiet, Powerful, and Will Outlive Any Fad Diet" path="/"/>
      </div>
    
       <Link to="/first"><Button buttonStyle="btn--primary" buttonSize="btn--large">More Articles</Button></Link>
    
    </div>
    </>

  )
}

export default BodyArticleDown
