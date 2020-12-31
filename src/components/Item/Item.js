import React, { Component } from 'react';
import config from '../../config';

class Item extends Component {

  state = {
    city: "",
  }

  onClick = () => {
    this.props.getNameOnClick( this.props.city.name );
  }

  handleDelete = ( id ) => {
    const itemId = id;
    fetch( `${ config.API_ENDPOINT }/api/cities/${ itemId }`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then( res => {
      if( !res.ok ) {
        return res.json().then( e => Promise.reject( e ));
      }
      return res;
    })
    .then( ( city ) => {
      this.props.onDeleteCity( itemId );
      this.setState({
        city
      })
    })
    .catch( error => {
      console.log( error );
    })
  }

  render() {
    return (
      <div className="item">
          <div 
            className="city-item"
            onClick={ e => this.onClick( e ) }
            >
              { this.props.city.name }
            <button
              className="btn"
              type="button"
              onClick={ () => this.handleDelete( this.props.city.id ) }
            >x</button>
          </div>
      </div>
    );

  }
};

export default Item;