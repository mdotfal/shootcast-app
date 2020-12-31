import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import './Nav.css';

class Nav extends Component {

  static contextType = AppContext;

  render() {
    return (
      <div className="nav">
        <Link to='/home'>
          Home  
        </Link>
          <p onClick={ this.props.onSignOut }>Sign Out</p>
      </div>
    );
  }

};

export default Nav;