import React from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import './ListPage.css';

function ListPage( props ) {
  return (
    <div className="list">
      <h2>Custom List</h2>
      <div className="list-cities">
        { props.cities.map( city =>
          <div key={ city.id }>
            <Item
              city={ city }
              onDeleteCity={ props.onDeleteCity }
            />
          </div>
          )}
      </div>

      <AddCity onAddCity={ props.onAddCity }/>

   </div>
  );
};

export default ListPage;