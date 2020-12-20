import React from 'react';
// import AddList from '../AddList/AddList';

function SidebarItems( props ) {
  // console.log( 'sidebar items',props );
  return (
    <div className="sidebar-items">
      <p> 
        { props.list.name } 
      </p>
      <button
        type="button"
        onClick={ () => props.onDeleteList( props.list )}
      >x</button>
    </div>
  )
}

export default SidebarItems;