import React, { Component } from 'react';
import moment from 'moment';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  render() {

    const newDate = new Date();
    const weekDay = this.props.data.dt * 1000
    newDate.setTime( weekDay );

    return (
      <div className='weather-display'>
        <h2>{ Math.round( this.props.data.main.temp )}°F</h2>
        <div className="weather-display-items">
          <div className="current-weather-display">
            { moment( newDate ).format( 'dddd' )}
          </div> 
          &nbsp;|&nbsp;
          <div className="current-weather-description">
            { this.props.data.weather[ 0 ].description.trim() }
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;