import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './ListPage.css';

// const baseUrl = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
class ListPage extends Component {
  
  state = {
    data: [],
  }
  
  // componentDidMount() {
  //   this.getWeather();
  // }

  componentDidMount = () => {
    const city = 'San Francisco'
    const base = `http://api.openweathermap.org/data/2.5/forecast?q=`
    const api_key = 'c981e672df25eb5c03349c2335d240dd';
    const imperial = `&units=imperial`
    const url = `${ base }${ city }&appid=${ api_key }${ imperial }`;
    fetch( url )
      .then( res => {
        if( res.ok ) return res.json();
      })
      .then( data => {
        const weather = data.list.filter( reading => reading.dt_txt.includes("18:00:00") )
        this.setState({
          data: weather
        })
      })
      .catch( err => err.message );
  }

  formatForecast = () => {
    return this.state.data.map( ( reading, index ) => 
      <WeatherDisplay reading={ reading } key={ index }/> )
  }

  render() {
    console.log('listpage-statedata', this.state.data )
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
                  city={ city }
                  onDeleteCity={ this.props.onDeleteCity }
                />
              </li>
              )}
          </ul>
          <div className="list-forecast">
            {/*  This is Weather Display */}
            { this.formatForecast() }
          </div>
        </div>
     </div>
    );
  }
};

export default ListPage;