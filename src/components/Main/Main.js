import React from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import List from '../List/List';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './Main.css';

function Main( props ) {
  // console.log( 'main cities',props.lists )
  return (
    
    <div className="container">
      <Nav />
      <Sidebar lists={ props.lists }/>
      <List cities={ props.cities }/>
      <WeatherDisplay />

  </div>
  );
   
};

export default Main;