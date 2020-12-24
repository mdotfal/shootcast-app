import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './ListPage.css';
class ListPage extends Component {
  
  state = {
    forecastData: [],
    weatherData: [],
    city: "",
  }

  componentDidMount = () => {
    const city = 'San Ramon'
    const baseForecast = `http://api.openweathermap.org/data/2.5/forecast?q=`;
    const baseWeather = `http://api.openweathermap.org/data/2.5/weather?q=`
    const api_key = 'c981e672df25eb5c03349c2335d240dd';
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
        weatherData
      })
    })
    .catch( err => err.message );
  }

  formatForecast = () => {
    return this.state.forecastData.map( ( reading, i ) => 
      <WeatherDisplay reading={ reading } key={ i } /> )
  }

  // getNameOnClick = e => {
  //   console.log( 'getNameOnClick clicked', this )
    // this.setState({
    //   city: this.props.city.name
    // })
  // }

  render() {
    // console.log('listpage-statedata', this.state )
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
              <li 
                key={ i }
                >
                <Item
                  id={ city.id }
                  value={ city.name }
                  city={ city }
                  // getNameOnClick={ this.getNameOnClick }
                  onDeleteCity={ this.props.onDeleteCity }
                />
              </li>
              )}
          </ul>
          <div className="list-forecast">
            {/*  This is Weather Display */}
            <div className="city-name">
              <h2>{ this.state.weatherData.name }</h2>
            </div>
            <div className="forecast-items">
              { this.formatForecast() }
            </div>
          </div>
        </div>
     </div>
    );
  }
};

export default ListPage;