import React, { Component } from 'react';
import AppContext from '../../AppContext';
import config from '../../config';

class AddCity extends Component {

  static contextType = AppContext;

  onSubmit = e => {
    e.preventDefault();
    const newCity = {
      name: e.target.search.value,
      list_id: e.target.listId.value
    }
    fetch( `${ config.API_ENDPOINT }/api/cities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify( newCity )
    })
    .then( res => res.json())
    .then( data => {
      this.context.onAddCity( data );
    })
    .catch( error => { console.log( error )})
  }

  render() {
    return (
      <div className="addcity">
        <form className="addcity-form" onSubmit={ this.onSubmit }>
          <p>Add a City to your List</p>
          <label htmlFor="search"></label>
          <input type="text" placeholder="Enter City" name="search" id="search" required />
  
          <label htmlFor=""></label>
          <select id="listId" name="listId">
            { this.context.lists.map( ( list, i ) => 
              <option
                key={ i }
                value={ list.id }
              >{ list.name }</option> 
            )}
          </select>
            <button
              type="submit"
            >Add City</button>
          </form>
      </div>
    );
  };
};

export default AddCity;