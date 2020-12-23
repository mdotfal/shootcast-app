import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListPage from '../ListPage/ListPage';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

class Home extends Component {

  render() {

    // console.log( 'home', this.props )
    const { listId } = this.props.match.params
    const cities = !listId ? this.props.cities : this.props.cities.filter( item => item.listId === listId );

    return (
      <div>
        <Nav onSignOut={ this.props.onSignOut }/>
        <Sidebar 
          { ...this.props }
        />
        <ListPage 
          cities={ cities }
          lists={ this.props.lists }
          onDeleteCity={ this.props.onDeleteCity }
          onAddCity={ this.props.onAddCity } 
        />
        <WeatherDisplay />
      </div>
    );
  }
};

export default Home;