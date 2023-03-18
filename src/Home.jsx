import { useState } from 'react'
import Body from './Body'
import BodyDown from './BodyDown'
import BodyArticleDown from './BodyArticleDown'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      
      <Body/>
      <BodyDown/>
      <BodyArticleDown/>
    
    </div>
  )
}

export default Home