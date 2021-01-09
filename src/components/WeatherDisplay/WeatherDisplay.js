import React, { Component } from 'react';
import moment from 'moment';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  static defaultProps = {
    data: {
      main: '',
      weather: [
        { description: '' }
      ],
    }
  }

  render() {

    // setup for moment function
    const newDate = new Date();
    const weekDay = this.props.data.dt * 1000
    newDate.setTime( weekDay );

    return (
      <div className='weather-display'>

        {/* Math.round sets value of data.main.temp to nearest integer */}
        <h2>{ Math.round( this.props.data.main.temp )}°F</h2>
        <div className="weather-display-items">
          <div className="current-weather-display">
            
            {/* displays day of the week */}
            { moment( newDate ).format( 'dddd' )}
          </div> 
          &nbsp;|&nbsp;
          <div className="current-weather-description">

            {/* displays weather description */}
            { this.props.data.weather[ 0 ].description.trim() }
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;