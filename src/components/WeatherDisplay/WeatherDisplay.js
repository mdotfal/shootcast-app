import React, { Component } from 'react';
import moment from 'moment';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  render() {

    const newDate = new Date();
    const weekDay = this.props.data.dt * 1000
    newDate.setTime( weekDay );

    // console.log( 'wd-state', this.props )
    return (
      <div className='weather-display'>
        {/* <h2>{ this.props.wData.main.temp }</h2> */}
        <div className="current-weather-display">
          { moment( newDate ).format( 'dddd' )}
        </div>
        <div className="current-weather-description">
          { this.props.data.weather[0].description }
        </div>
        <h2>{ Math.round( this.props.data.main.temp )}°F</h2>
        <div className="current-weather-max">
            { this.props.data.main.temp_max } |  
              { this.props.data.main.temp_min }
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;