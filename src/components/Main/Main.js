import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListPage from '../ListPage/ListPage';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './Main.css';

class Main extends Component {
  render() {
    // console.log( 'main cities',props.lists )
    return (
      
      <div>

        {/* <Route exact path='/nav' component={ Nav }/> */}
        {/* <Nav /> */}
        <Sidebar 
          lists={ this.props.lists }
          onAddList={ this.props.onAddList }
          onDeleteList={ this.props.onDeleteList }
          />
        <ListPage
          lists={ this.props.lists }
          cities={ this.props.cities }
          onAddCity={ this.props.onAddCity } 
          onDeleteCity={ this.props.onDeleteCity }
        />
        <WeatherDisplay />
  
      </div>
    );
  }
   
};

export default Main;