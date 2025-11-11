import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';

const home = () => {
  return (
    <div className='hero-container'>
     <div className='heading'>
       <h1>Citizen Resolution System</h1>
      <p>Report and track community issues efficiently. Your voice matters in <br />building a better community.</p>
     </div>
     <div className='navlinks'>
       <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
     </div>
     <div className='works'>
      <h2>How It Works</h2>
     </div>
     <div className='track-process'>
      <div className='process' >
        <h1 className='number'>1</h1>
        <h3>Register</h3>
        <p>Create your account as a citizen</p>
      </div>
      <div className='process'>
        <h1 className='number'>2</h1>
        <h3>Submit</h3>
        <p>Report issues with details and photos</p>
      </div>
      <div className='process'>
        <h1 className='number'>3</h1>
        <h3>Track</h3>
        <p>Monitor progress and status updates</p>
      </div>
     </div>

     <div className='footer-card'>
      <h2>Ready to Get Started?</h2>
      <p>Join our community and help make a difference</p>
     <div className='footer-links'>
       <NavLink id='create-account' to='/register'>Create Account</NavLink>
      <NavLink id='sign-in' to='/login'> Sign in</NavLink>
     </div>
     </div>
    </div>
  )
}

export default home