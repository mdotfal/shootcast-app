import React from 'react';
import Item from '../Item/Item';
import './ListItems.css';

function ListItems() {
  return (
    <div className="list-items">
      <p>List 1</p>
      <Item />
      <span>
        <label for="search"></label>
        <input type="text" placeholder="Enter City" name="search" id="search" required />
        <button>+</button>
      </span>
   </div>
  );
};

export default ListItems;