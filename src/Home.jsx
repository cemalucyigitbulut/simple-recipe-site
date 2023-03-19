import { useState } from 'react'
import Body from './Body'
import BodyDown from './BodyDown'
import BodyArticleDown from './BodyArticleDown'
import { Link } from 'react-router-dom'
import Article from './Article'
import LearnHow from './LearnHow'


const Home = () => {
  return (
    <div>
      
      <Body/>
      <LearnHow/>
      <BodyDown/>
      <Article/>
    
    </div>
  )
}

export default Home