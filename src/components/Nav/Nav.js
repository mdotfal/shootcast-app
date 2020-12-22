import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  const signOut = () => {
    window.location.reload( false );
  } 

  return (
    <div className="nav">
      <Link to='/home'>
        Home  
      </Link>
        <p onClick={ signOut }>Sign Out</p>
    </div>
  );
};

export default Nav;