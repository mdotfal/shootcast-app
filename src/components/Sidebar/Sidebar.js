import React from 'react';
import SidebarItems from '../SidebarItems/SidebarItems';
import './Sidebar.css';

function Sidebar( props ) {
  
  return (
    <div className="sidebar">
      
      <SidebarItems lists={ props.lists }/>

      <div className="sidebar-form">
        <p>New List</p>

      </div>
    </div>
  );
};

export default Sidebar;