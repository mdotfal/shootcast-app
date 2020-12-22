import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Landing.css';
class Landing extends Component {

  state = {
    username: '',
    password: '',
    isError: false
  }
  
  onUserChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  onPassChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const result = this.props.handleLogin( this.state.username, this.state.password );
    if( !result ) {
      this.setState({
        isError: true
      })
    }

  }

  render() {
  
    if( this.props.authedUser ) {
      return (
        <Redirect to='/home' />
      );
    };

    return (
      <div className="landing-page">
        <h1>Welcome to the ShootCast App</h1>
        <p>In a world of varying climates and back-to-back creative shoots, a way to keep in the know of current weather situations is a must.</p>
        <p>ShootCast is an app that will help you do so and create custom lists of cities to see the weather conditions with the click of a mouse.</p>
        <p>Find out the current weather forecast and plan your shoot correctly.</p>

        { this.state.isError && <div> Username/Password incorrect </div> }
        
        <form onSubmit={ this.onSubmit }>
          <div className="landing-container">
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" onChange={ this.onUserChange } required />
        
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" onChange={ this.onPassChange} required />
        
            <button 
              type="submit"
            >Login</button>
          </div>
        </form>
        or
        <Link to="/registration">
          <button>Register</button>
        </Link>
      </div>
    );
    
  }
}

export default Landing;