import React, { Component } from 'react';
import AddList from '../AddList/AddList';
import SidebarItems from '../SidebarItems/SidebarItems';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    // console.log( 'sidebar',this.props)
    
    return (
      <div className="sidebar">
        { this.props.lists.map( ( list, i ) => 
          <SidebarItems
            key={ i } 
            list={ list } 
            onDeleteList={ this.props.onDeleteList }
          />
        )}
  
        <AddList onAddList={ this.props.onAddList }/>
      </div>
    );
  };
};

export default Sidebar;