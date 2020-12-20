import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay() {
  return (
    <section>
      <div className="current-weather-display">
        <p>Sunny</p>
      </div>

      <div className="current-weather-forecast">
        <span>Forecast</span>
      </div>
    </section>
  );
}

export default WeatherDisplay;