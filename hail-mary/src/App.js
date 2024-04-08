import React from 'react'
import teslagif from '../src/assets/teslagif.webm'

export default function App() {
  return (
    <div className="landing-page">
      <div className='overlap'></div>
      <video src={teslagif} autoPlay loop playsInline muted />
      <div className='header'>
        <h1>TESLA</h1>
        <p>Welcome to the TESLA website!</p>
      </div>
    </div>
  );
}
  

