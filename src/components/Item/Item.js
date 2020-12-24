import React, { Component } from 'react';

class Item extends Component {

  state = {
    city: "",
  }

  getNameOnClick = e => {
    console.log( 'getNameOnClick clicked', this.props.city.name )
    this.setState({
      city: this.props.city.name
    })
  }

  render() {
    // console.log( 'Item-this.state',this.state )
    return (
      <div className="item">
          <div 
            className="city-item"
            onClick={ e => this.getNameOnClick( e ) }>
              
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