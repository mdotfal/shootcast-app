import React from 'react';

function CurrentWeather( props ) {
  // console.log( 'cw-wData', props.wData )
  return (
    <div className='current-weather'>
      <h2>{ props.wData.name }</h2>
      {/* <p>{ props.wData.main.temp }</p> */}
    </div>
  );
}

export default CurrentWeather;