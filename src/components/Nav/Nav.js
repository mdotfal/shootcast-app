import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav( props) {

  return (
    <div className="nav">
      <Link to='/home'>
        Home  
      </Link>
        <p onClick={ props.onSignOut }>Sign Out</p>
    </div>
  );
};

export default Nav;