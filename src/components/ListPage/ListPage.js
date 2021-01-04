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
    const baseWeather = `https://api.openweathermap.org/data/2.5/weather?q=`
    const api_key = `${ config.API_KEY }`;
    const imperial = `&units=imperial`
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
        forecastData: forecast,
        weatherData,
      })
    })
    .catch( err => err.message );
  }

  // Map WeatherDisplay Component
  formatForecast = () => {
    return this.state.forecastData.map( ( data, i ) => 
      <WeatherDisplay data={ data } key={ i } /> 
    )
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
              </li>
              )}
          </ul>
        </div>
        <div className="list-forecast">

          {/*  This is Weather Display */}
          <div className="city-name">
            <CurrentWeather 
              wData={ this.state.weatherData } 
            />
          </div>
          <div className="forecast-items">
            
            { this.state.city !== "" 
              ? this.formatForecast()
              : <div className="forecast-welcome">
                  <h2>Welcome to ShootCast!</h2>
                  <p>Click a city to get weather!</p>
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
}

export default ListPage;