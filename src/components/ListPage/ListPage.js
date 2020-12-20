import React, { Component } from 'react';
import AddCity from '../AddCity/AddCity';
import Item from '../Item/Item';
import './ListPage.css';

class ListPage extends Component {
  render() {
    return (
      <div className="list">
        <h2>Custom List</h2>
        <div className="list-cities">
          { this.props.cities.map( ( city, i ) =>
            <div key={ city.id }>
              <Item
                key={ i }
                city={ city }
                onDeleteCity={ this.props.onDeleteCity }
              />
            </div>
            )}
        </div>
  
        <AddCity onAddCity={ this.props.onAddCity }/>
  
     </div>
    );
  }
};

export default ListPage;