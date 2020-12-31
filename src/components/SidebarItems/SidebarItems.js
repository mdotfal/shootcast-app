import React, { Component } from 'react';
class SidebarItems extends Component {
  render() {
    // console.log( 'sidebar items',props );
    return (
      <div className="sidebar-items">
        <p> 
          { this.props.list.name } 
        </p>
        <button
          className="btn"
          type="button"
          onClick={ () => this.props.onDeleteList( this.props.list )}
        >x</button>
      </div>
    )
  };
}

export default SidebarItems;