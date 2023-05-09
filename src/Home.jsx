import { useState } from 'react'
import Body from './Components/Body'
import BodyDown from './Components/BodyDown'
import { Link } from 'react-router-dom'
import Article from './Components/Article'
import NewsTeller from './Components/NewsTeller'
import UnderPrice from './Components/UnderPrice'
import FakeTestimonial from './Components/FakeTestimonial'



const Home = () => {
  return (
    <div>
      
      <Body/>
      <UnderPrice/>
      <BodyDown/>
      <Article/>
      <FakeTestimonial/>
      <NewsTeller/>
    
    </div>
  )
}

export default Home