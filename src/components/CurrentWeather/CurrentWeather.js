import React from 'react';
import './CurrentWeather.css';

function CurrentWeather( props ) {

  const sunset = ( stamp ) => {
    const timeFormat = new Intl.DateTimeFormat( 'en-US', {
      timeStyle: 'medium',
      timeZone: 'America/Los_Angeles'
    });
    return timeFormat.format( new Date( stamp * 1000 ))
  }

  const { name } = props.wData;
  return (
    <div className='current-weather'>
      { props.wData.length !== 0
          ? <div>
              <h1>{ Math.round( props.wData.main.temp ) }°F</h1>
              <p>{ props.wData.weather[0].description }</p>
              <p> Sunset: { sunset( props.wData.sys.sunset ) }</p>
            </div>
          : <h1> { name } </h1>
      }
    </div>
  );
};

export default CurrentWeather;