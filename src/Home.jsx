import { useState } from 'react'
import Body from './Body'
import BodyDown from './BodyDown'
import BodyArticleDown from './BodyArticleDown'
import { Link } from 'react-router-dom'
import Article from './Article'
import NewsTeller from './NewsTeller'
import UnderPrice from './UnderPrice'
import FakeTestimonial from './FakeTestimonial'


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