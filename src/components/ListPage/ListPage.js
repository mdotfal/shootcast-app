import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Item from '../Item/Item';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import config from '../../config';
import AppContext from '../../AppContext';
import PropTypes from 'prop-types';
import './ListPage.css';
class ListPage extends Component {

  static contextType = AppContext;

  state = {
    forecastData: [],
    weatherData: [],
    city: "",
    background: "",
    isError: false,
  }

  componentDidUpdate = ( prevProps, prevState ) => {
    if( prevState.city !== this.state.city ) {
       this.fetchWeather( this.state.city );
    }
  }

  // Main FETCH calls for Weather API

  fetchWeather = () => {
    const city = !undefined ? this.state.city : "San Bruno";
    const baseForecast = `https://api.openweathermap.org/data/2.5/forecast?q=`;
    const baseWeather = `https://api.openweathermap.org/data/2.5/weather?q=`;
    const api_key = `${ config.API_KEY }`;
    const imperial = `&units=imperial`;
    const forecastUrl = `${ baseForecast }${ city }&appid=${ api_key }${ imperial }`;
    const weatherUrl = `${ baseWeather }${ city }&appid=${ api_key }${ imperial }`;

    Promise.all([
      fetch( forecastUrl ),
      fetch( weatherUrl )
    ]) 
    .then( ([ forecastRes, weatherRes ]) => {
      if( !forecastRes.ok ) {
        return forecastRes.json().then( e => Promise.reject( e ));
      }
      if( !weatherRes.ok ) {
        return weatherRes.json().then( e => Promise.reject( e ));
      }
      return Promise.all([ forecastRes.json(), weatherRes.json() ]);
    })
    .then( ([ forecastData, weatherData ]) => {
      const forecast = forecastData.list.filter( fData => fData.dt_txt.includes("18:00:00") );
      this.setState({
        isError: false,
        forecastData: forecast,
        weatherData,
      });
    })
    .catch( err => {
      this.setState({
        isError: true
      });
    });
    
  }

  // Map WeatherDisplay Component
  formatForecast = () => {
    return this.state.forecastData.map( ( data, i ) => 
      <WeatherDisplay data={ data } key={ i } /> 
    );
  }

  // Grabs cityName and adds it to state for onClick Weather fetch call
  getNameOnClick = ( cityName ) => {
    this.setState({ city: cityName });
  }

  render() {
    return (
      <div className="list">
        <AddCity />
        <div className="list-cities">
          <p>&#8678; Click a city to view Weather &#8680;</p>
          <ul>

            { this.props.cities.map( (city , i ) =>
                <li key={ i }>
                  <Item
                    id={ city.id }
                    value={ city.name }
                    city={ city }
                    getNameOnClick={ this.getNameOnClick }
                    history={ this.props.history }
                  />
                </li>)
            }
          </ul>
        </div>
        <div className="list-forecast">

          {/*  This is Weather Display */}
          <div className="city-name">
            {
              this.state.isError === true
                ? ""
                : <CurrentWeather 
                    wData={ this.state.weatherData }
                    city={ this.state.city } 
                  />
            }
          </div>
          <div className="forecast-items">
            
            {  }
            { this.state.isError === false && this.state.forecastData !== []
                ? this.formatForecast()
                : <div className="forecast-welcome">
                  <h3 style={{ color: 'red' }}>City not found!</h3>
                  <p>Check spelling and add a new city!</p>
                </div>
            }
            
          </div>
        </div>
     </div>
    );
  }
};

ListPage.propTypes = {
  cities: PropTypes.array,
};

export default ListPage;