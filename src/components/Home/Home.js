import React from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListPage from '../ListPage/ListPage';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

function Home( props ) {
  return (
    <div>
      <Nav />
      <Sidebar 
        { ...props }
      />
      <ListPage
        { ...props }
        />
      <WeatherDisplay />
    </div>
  );
};

export default Home;