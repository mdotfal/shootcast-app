import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Item from '../Item/Item';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './ListPage.css';
class ListPage extends Component {
  
  state = {
    forecastData: [],
    weatherData: [],
    city: "",
  }

  componentDidUpdate = ( prevProps, prevState ) => {
    console.log( 'cdu ran')
    // console.log( 'componentDidUpdate', 'prevState', prevState )
    if( prevState.city !== this.state.city ) {
       this.fetchWeather( this.state.city );
    }
  }

  fetchWeather = () => {
    console.log( 'fetchWeather ran' )
    const city = !undefined ? this.state.city : "San Bruno";
    const baseForecast = `http://api.openweathermap.org/data/2.5/forecast?q=`;
    const baseWeather = `http://api.openweathermap.org/data/2.5/weather?q=`
    const api_key = '9e87c427393cb8c3e29a65c2b58db7a3';
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
      const forecast = forecastData.list.filter( reading => reading.dt_txt.includes("18:00:00") );
      
      this.setState({
        forecastData: forecast,
        weatherData,
      })
    })
    .catch( err => err.message );
  }

  formatForecast = () => {
    return this.state.forecastData.map( ( data, i ) => 
      <WeatherDisplay data={ data } key={ i } /> 
    )
  }

  getNameOnClick = ( cityName ) => {
    this.setState({ city: cityName });
  }

  render() {

    return (
      <div className="list">
        <AddCity 
          onAddCity={ this.props.onAddCity }
          lists={ this.props.lists }
        />
        <br />
        <div className="list-cities">
          <ul>
            <p>Click a city to view Weather</p>

            { this.props.cities.map( (city , i ) =>
              <li key={ i }>
                <Item
                  id={ city.id }
                  value={ city.name }
                  city={ city }
                  getNameOnClick={ this.getNameOnClick }
                  onDeleteCity={ this.props.onDeleteCity }
                />
              </li>
              )}
          </ul>
          <div className="list-forecast">
            {/*  This is Weather Display */}
            <div className="city-name">
              <CurrentWeather wData={ this.state.weatherData } />
            </div>
            <div className="forecast-items">
              
              { this.state.city !== "" 
                ? this.formatForecast()
                : "Welcome to ShootCast!  Click a city to begin!" }
            </div>
          </div>
        </div>
     </div>
    );
  }
};

export default ListPage;