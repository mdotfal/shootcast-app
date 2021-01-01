import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListPage from '../ListPage/ListPage';
import AppContext from '../../AppContext';


class Home extends Component {

  static contextType = AppContext;

  render() {
    let listId = parseInt( this.props.match.params.listId )
    const cities = !listId 
      ? this.context.cities 
      : this.context.cities.filter( item => item.list_id === listId )
    
    return (
      <>
        <Nav />
        <Sidebar />
        <ListPage
          cities={ cities }
        />
      </>
    );
  }
};

export default Home;