import React from 'react';

function SidebarItems( props ) {
  return (
    <div className="sidebar-items">
      { props.lists.map( list => 
        <p key={ list.name }> { list.name } </p>
      )}
    </div>
  )
}

export default SidebarItems;