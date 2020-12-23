import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './ListPage.css';

class ListPage extends Component {
  render() {
    return (
      <div className="list">
        <AddCity 
          onAddCity={ this.props.onAddCity }
          lists={ this.props.lists }
        />
        <p>{ this.props.lists.name }</p>
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
          <WeatherDisplay />
        </div>
  
        
     </div>
    );
  }
};

export default ListPage;