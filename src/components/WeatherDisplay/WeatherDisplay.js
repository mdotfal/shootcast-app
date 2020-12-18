import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay() {
  return (
    <section>
      <div className="current-weather-display">
        <p>Sunny</p>
      </div>

      <div className="current-weather-forecast">
        <span>Sunday</span>
        <span>Monday</span>
        <span>Tuesday</span>
        <span>Wednesday</span>
        <span>Thursday</span>
        <span>Friday</span>
        <span>Saturday</span>
      </div>
    </section>
  );
}

export default WeatherDisplay;