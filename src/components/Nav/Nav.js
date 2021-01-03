import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import './Nav.css';

class Nav extends Component {

  static contextType = AppContext;

  render() {
    return (
      <div className="nav">
        <div className="nav-logo">
          ShootCast
        </div>
        <div className="nav-links">
          <Link to='/home'>
            Home  
          </Link>
          <Link to='/' onClick={ this.context.onSignOut }>
            Sign Out
          </Link>
        </div>
      </div>
    );
  }

};

export default Nav;