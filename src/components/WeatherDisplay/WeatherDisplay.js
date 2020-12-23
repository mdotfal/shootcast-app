import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay() {
  return (
    <div className='weather-display'>
      <div className="current-weather-display">
        <p>Sunny</p>
      </div>

      <div className="current-weather-forecast">
        <span>Forecast</span>
      </div>
    </div>
  );
}

export default WeatherDisplay;