import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import AppContext from '../../AppContext';
import './Home.css';

class Home extends Component {


  static contextType = AppContext;

  render() {
    let listId = parseInt( this.props.match.params.listId )
    const cities = !listId 
      ? this.context.cities 
      : this.context.cities.filter( item => item.list_id === listId )
    
    return (
      <div className="main">
        <Nav />
        <div className="main-home">
          <div className="sidebar-home">
            <Sidebar 
              cities={ cities }
            />
          </div>
        </div>
      </div>
    );
  }
};

Home.propTypes = {
  cities: PropTypes.array
}

export default Home;