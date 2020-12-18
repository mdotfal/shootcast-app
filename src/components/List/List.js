import React from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import './List.css';

function List( props ) {
  return (
    <div className="list">
      <h2>Custom List</h2>
      
     <Item cities={ props.cities }/>

      <AddCity />

   </div>
  );
};

export default List;