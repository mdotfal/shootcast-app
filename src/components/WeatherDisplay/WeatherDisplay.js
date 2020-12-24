import React, { Component } from 'react';
import moment from 'moment';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  render() {

    const newDate = new Date();
    const weekDay = this.props.reading.dt * 1000
    newDate.setTime( weekDay );

    // console.log( 'wd-state', this.props )
    return (
      <div className='weather-display'>
        <div className="current-weather-display">
          { moment( newDate ).format( 'dddd' )}
        </div>
        <div className="current-weather-description">
          { this.props.reading.weather[0].description }
        </div>
        <h2>{ Math.round( this.props.reading.main.temp )}°F</h2>
        <div className="current-weather-max">
            High-{ this.props.reading.main.temp_max } |  
            Low-{ this.props.reading.main.temp_min }
        </div>
        
      </div>
    );
  }
}

export default WeatherDisplay;