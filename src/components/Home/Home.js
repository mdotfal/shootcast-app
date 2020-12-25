import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import ListPage from '../ListPage/ListPage';


class Home extends Component {

  render() {
    const { listId } = this.props.match.params
    const cities = !listId ? this.props.cities : this.props.cities.filter( item => item.listId === listId );

    return (
      <>
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
      </>
    );
  }
};

export default Home;