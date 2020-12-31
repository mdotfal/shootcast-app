import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListPage from '../ListPage/ListPage';
import AppContext from '../../AppContext';


class Home extends Component {

  static contextType = AppContext;

  render() {
    const { listId } = this.props.match.params
    const cities = !listId 
    ? this.context.cities 
    : this.context.cities.filter( item => item.list_id === parseInt( listId ))
    
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