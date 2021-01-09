import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

class Registration extends Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    isError: false,
    isSuccess: false
  }

  // onUsernameChange sets username value
  onUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  }

  // onPassWordChange sets password value
  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  }

  // onRepeatPassWordChange sets repeat password value
  onRepeatPasswordChange = e => {
    this.setState({
      repeatPassword: e.target.value
    });
  }


  // onSubmit
  onSubmit = e => {
    e.preventDefault();

    // check to see if password value stored in state doesn't equal repeatPassword then display error.
    if( this.state.password !== this.state.repeatPassword ) {
      return this.setState({
        isError: "Passwords do not match!"
      });
    };
    const result =  this.props.handleRegistration( this.state.username, this.state.password);

    // check to see if username is taken then display error else set isSuccess to true to validate and isError to false
    if( !result ) {
      return this.setState({
        isError: 'Username already taken!'
      });
    } else {
      this.setState({
        isSuccess: true,
        isError: false
      });
    }
  }

  render() {
    return (
      <form className="reg-form" onSubmit={ this.onSubmit }>
        <fieldset>
          <div className="reg-container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            { this.state.isError && <div style={{ color: 'red' }}>{ this.state.isError }</div> }
        
            { this.state.isSuccess && <div style={{ color: 'green' }}>User created! <Link to='/' >Click here to login!</Link></div> }

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="username" onChange={ this.onUsernameChange } required />
            <br />
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password" onChange={ this.onPasswordChange } required />
            <br />
            <label htmlFor="password-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat" onChange={ this.onRepeatPasswordChange } required />
            <br />
            <button type="submit" className="registerbtn">Register</button>
            <Link to='/'>
              <button type="button" className="cancelbtn">Cancel</button>
            </Link>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Registration;