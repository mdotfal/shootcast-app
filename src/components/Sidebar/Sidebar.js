import React from 'react';
import AddList from '../AddList/AddList';
import SidebarItems from '../SidebarItems/SidebarItems';

import './Sidebar.css';

function Sidebar( props ) {
  
  return (
    <div className="sidebar">
      { props.lists.map( ( list, i ) => 
        <SidebarItems
          key={ i } 
          list={ list } 
          onDeleteList={ props.onDeleteList }
        />
      )}

    <AddList onAddList={ props.onAddList }/>
    </div>
  );
};

export default Sidebar;