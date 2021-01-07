import React, { Component } from 'react';
import AppContext from '../../AppContext';
import config from '../../config';
import './AddList.css';

class AddList extends Component {

  static contextType = AppContext;

  addList = event => {
  
    const name = event.target.inputList.value;

    fetch( `${ config.API_ENDPOINT }/api/lists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    .then( res => res.json())
    .then( data => {
      this.context.onAddList( data );
      event.target.inputList.value = '';
    })
    .catch( error => { 
      console.log( error );
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.addList( e );
  }

  render() {
    return (
      <div className="addlist">
        <form className="addlist-form" onSubmit={ this.onSubmit }>
          <label htmlFor="inputList">
            *
          </label>
          <input type="text" placeholder="Southern California" name="inputList" id="inputList" required />
          <button
            type="submit" 
          >Add List</button>
        </form>
      </div>
    );
  };
};

export default AddList;