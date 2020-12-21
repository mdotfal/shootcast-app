import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <h1>Welcome to the ShootCast App</h1>
      <p>Find out the current weather forecast and plan your shoot correctly.</p>
      <form>
        <div className="landing-container">
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />
      
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />
      
          <button 
            type="button"
          >Login</button>
        </div>
      </form>
      or
      <button>Register</button>
    </div>
  );
}

export default Landing;