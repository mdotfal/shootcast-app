import React from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListItems from '../ListItems/ListItems';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './Main.css';

function Main() {
  return (
    
    <div className="container">
      <Nav />
      <Sidebar />
      <ListItems />
      <WeatherDisplay />

  </div>
  );
   
};

export default Main;