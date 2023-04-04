import { useState } from 'react'
import Body from './Body'
import BodyDown from './BodyDown'
import BodyArticleDown from './BodyArticleDown'
import { Link } from 'react-router-dom'
import Article from './Article'
import NewsTeller from './NewsTeller'
import UnderPrice from './UnderPrice'


const Home = () => {
  return (
    <div>
      
      <Body/>
      <UnderPrice/>
      <BodyDown/>
      <Article/>
      <NewsTeller/>
    
    </div>
  )
}

export default Home