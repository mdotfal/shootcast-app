import React from 'react';
import './ListItems.css';

function ListItems() {
  return (
    <div className="list-items">
      <p>List 1</p>
      <span>San Francisco</span>
      <span>Fremont</span>
      <span>Walnut Creek</span>
      <span>Livermore</span>
      <span>Castro Valley</span>
      <span>
        <label for="search"></label>
        <input type="text" placeholder="Enter City" name="search" id="search" required />
        <button>+</button>
      </span>
   </div>
  );
};

export default ListItems;