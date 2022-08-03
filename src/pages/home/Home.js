import React from 'react'
import Profile from '../../components/profile/Profile'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="profile"><Profile /></div>
      <div className="post">Post</div>
      <div className="right">Right</div>
    </div>
  )
}

export default Home