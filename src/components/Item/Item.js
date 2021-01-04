import React, { Component } from 'react';
import AppContext from '../../AppContext';
import config from '../../config';

class Item extends Component {

  static contextType = AppContext;

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
      this.context.onDeleteCity( itemId );
      this.setState({
        city
      })
      this.handleReset();
    })
    .catch( error => {
      console.log( error );
    })
  }

  handleReset = () => {
    this.setState({
      city: ""
    })
  }

  render() {
    return (
      <div className="item">
          <div 
            className="city-item"
            onClick={ e => {
              e.stopPropagation();
              this.onClick( e ) }
            }
            >
              { this.props.city.name }
            <button
              className="btn"
              type="button"
              onClick={ ( e ) => {
                e.stopPropagation();
                this.handleDelete( this.props.city.id )}
              }
            >x</button>
          </div>
      </div>
    );

  }
};

export default Item;