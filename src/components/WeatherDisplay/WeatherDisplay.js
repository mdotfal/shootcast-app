import React, { Component } from 'react';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  state = {
    data : {}
  }

  componentDidMount() {
    // this.setState({
    //   data: this.props.data
    // })
  }

  render() {
    console.log( 'wd', this.state )
    return (
      <div className='weather-display'>
        <div className="current-weather-display">
          {/* <p>{ this.state.data.name }</p> */}
        </div>
  
        <div className="current-weather-forecast">
          {/* <p>{ this.state.data.weather[0].name }</p> */}
          <p>{ }</p>
          <p>{ }</p>
          <p>{ }</p>
          <p>{ }</p>
          <p>{ }</p>
          <p>{ }</p>
          <p>{ }</p>
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;