import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import './ListPage.css';

class ListPage extends Component {
  render() {
    return (
      <div className="list">
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
        </div>
  
        <AddCity 
          onAddCity={ this.props.onAddCity }
          lists={ this.props.lists }
        />
     </div>
    );
  }
};

export default ListPage;