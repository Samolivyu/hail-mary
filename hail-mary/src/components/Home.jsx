import React from 'react'
import teslagif from '../assets/teslagif.webm'

const Home = () => {
  return (
    <div className='home'>
        <div className="overlay"></div>
        <video src={teslagif} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}

export default Home