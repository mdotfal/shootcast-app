import React from 'react';

function Item( props ) {
  return (
    <div className="item">
        <div className="city-item">
          <p>{ props.city.name }</p>  
          <button
            type="button"
            onClick={ () => props.onDeleteCity( props.city ) }
          >x</button>
        </div>
    </div>
  );
};

export default Item;