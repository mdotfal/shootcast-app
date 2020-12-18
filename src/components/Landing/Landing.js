import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <h1>Welcome to the ShootCast App</h1>
      <p>Find out the current weather forecast and plan your shoot correctly.</p>
      <form>
        <div className="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />
      
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />
      
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>
      </form>
      or
      <button>Register</button>
    </div>
  );
}

export default Landing;