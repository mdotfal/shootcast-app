import React from 'react';

function Registration() {
  return (
    <form>
      <fieldset>
        <div className="reg-container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
      
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />
      
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="password" required />
      
          <label htmlFor="password-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat" required />
      
          
          <button type="submit" className="registerbtn">Register</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Registration;