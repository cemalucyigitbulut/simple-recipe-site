import { useState } from 'react'
import Body from './Body'
import BodyDown from './BodyDown'
import BodyArticleDown from './BodyArticleDown'
import { Link } from 'react-router-dom'
import Article from './Article'
import NewsTeller from './NewsTeller'


const Home = () => {
  return (
    <div>
      
      <Body/>
      <BodyDown/>
      <Article/>
      <NewsTeller/>
    
    </div>
  )
}

export default Home