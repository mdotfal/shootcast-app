import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <div className="item">
          <div 
            className="city-item"
            onClick={ e => this.props.getNameOnClick( e.target.value ) }>
              
             { this.props.city.name }
              
            <button
              className="btn"
              type="button"
              onClick={ () => this.props.onDeleteCity( this.props.city )}
            >x</button>
          </div>
      </div>
    );

  }
};

export default Item;