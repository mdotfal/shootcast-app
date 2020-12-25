import React, { Component } from 'react';

class Item extends Component {

  state = {
    city: "",
  }

  onClick = e => {
    this.props.getNameOnClick( this.props.city.name );
    this.setState({
      city: this.props.city.name
    })
  }

  render() {
    return (
      <div className="item">
          <div 
            className="city-item"
            onClick={ e => this.onClick( e ) }>
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