import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registration extends Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    isError: false,
    isSuccess: false
  }

  onUsernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  onRepeatPasswordChange = e => {
    this.setState({
      repeatPassword: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    if( this.state.password !== this.state.repeatPassword ) {
      return this.setState({
        isError: "Passwords do not match!"
      })
    };
    const result =  this.props.handleRegistration( this.state.username, this.state.password);
    if( !result ) {
      return this.setState({
        isError: 'Username already taken!'
      })
    } else {
      this.setState({
        isSuccess: true,
        isError: false
      })
    }
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <fieldset>
          <div className="reg-container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            { this.state.isError && <div>{ this.state.isError }</div> }
        
            { this.state.isSuccess && <div>User created! <Link to='/' >Click here to login!</Link></div> }

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="username" onChange={ this.onUsernameChange } required />
        
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password" onChange={ this.onPasswordChange } required />
        
            <label htmlFor="password-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat" onChange={ this.onRepeatPasswordChange } required />
        
            
            <button type="submit" className="registerbtn">Register</button>
            <Link>
              <button type="button" className="cancelbtn">Cancel</button>
            </Link>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Registration;