import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import AddList from '../AddList/AddList';

import './Sidebar.css';

class Sidebar extends Component {

  render() {
    
    return (
      <div className="sidebar">
        <h3>Click to display cities or add a custom list.</h3>
        <ul>
          { this.props.lists.map( ( list, i ) => 
            <li key={ i }>
              <NavLink to={ `/lists/${ list.id }` }> 
              { list.name }
              </NavLink>
                <button
                className="btn"
                type="button"
                onClick={ () => this.props.onDeleteList( list )}
              >x</button>
            </li>
          )}
        </ul>
      <AddList onAddList={ this.props.onAddList }/>
      </div>
    );
  };
};

export default Sidebar;