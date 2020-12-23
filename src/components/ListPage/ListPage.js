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
  //   const city = 'San Francisco'
  //   const api_key = 'c981e672df25eb5c03349c2335d240dd';
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ api_key }`)
  //     .then( res => {
  //       if( res.ok ) return res.json();
  //     })
  //     .then( data => {
  //       this.setState({ 
  //         data
  //       })
  //     })
  //     .catch( err => err.message );

  // }

  render() {
    // console.log('listpage', this.state.data )
    return (
      <div className="list">
        <AddCity 
          onAddCity={ this.props.onAddCity }
          lists={ this.props.lists }
        />
        <br />
        <p>Click a city to view Weather</p>
        <div className="list-cities">
          <ul>
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
          <WeatherDisplay 
            // data={ this.state.data }
          />
        </div>
  
        
     </div>
    );
  }
};

export default ListPage;