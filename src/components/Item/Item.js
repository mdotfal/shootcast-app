import React, { Component } from 'react';

class Item extends Component {
  render() {
    // console.log( 'item', this.props )
    return (
      <div className="item">
          <div className="city-item">
            <p>{ this.props.city.name }</p>  
            <button
              type="button"
              onClick={ () => this.props.onDeleteCity( this.props.city )}
            >x</button>
          </div>
      </div>
    );

  }
};

export default Item;