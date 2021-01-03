import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListPage from '../ListPage/ListPage';
import AddList from '../AddList/AddList';
import config from '../../config';
import './Sidebar.css';

import AppContext from '../../AppContext';

class Sidebar extends Component {

  static contextType = AppContext;

  handleDelete = ( listId ) => {
    fetch( `${ config.API_ENDPOINT }/api/lists/${ listId }`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then( res => {
      if( !res.ok ) {
        return res.json().then( e => Promise.reject( e ));
      }
      return res;
    })
    .then( () => {
      this.context.onDeleteList( listId );
    })
    .catch( error => {
      console.log( error );
    })
  }

  render() {
    
    return (
      <div className="sidebar">
        <h1>Welcome!</h1>
        <p>ShootCast is an app where you can create custom lists of cities to view the current weather and forecast for any given city.</p>
        <AddList />
        <div className="sidebar-lists-map">
        <h2>Click to display list.</h2>
          <ul>
            { this.context.lists.map( ( list, i ) => 
              <li key={ i }>
                <NavLink to={ `/lists/${ list.id }` }> 
                { list.name }
                </NavLink>
                  <button
                  className="btn"
                  type="button"
                  onClick={ () => this.handleDelete( list.id )}
                >x</button>
              </li>
            )}
          </ul>
        </div>
        <br />
        <ListPage 
          cities={ this.props.cities }
        />
      </div>
    );
  };
};

export default Sidebar;