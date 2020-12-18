import React from 'react';

function Item( props ) {
 return (
   <div className="city-item">
     { props.cities.map( city =>
      <p key={ city.name }>{ city.name }</p>  
      )}
     
   </div>
  // <>
  //   <span>San Francisco</span>
  //   <span>Fremont</span>
  //   <span>Walnut Creek</span>
  //   <span>Livermore</span>
  //   <span>Castro Valley</span>
  // </>
 );
};

export default Item;