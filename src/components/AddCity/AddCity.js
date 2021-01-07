import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../AppContext';
import config from '../../config';
import './AddCity.css';

class AddCity extends Component {

  static defaultProps = {
    context: {
      lists: []
    }
  }

  static contextType = AppContext;

  onSubmit = e => {
    e.preventDefault();
    const newCity = {
      name: e.target.search.value,
      list_id: e.target.listId.value
    };
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
      e.target.search.value = '';
    })
    .catch( error => { 
      console.log( error ); 
    });
  }

  render() {
    return (
      <div className="addcity">
        <form className="addcity-form" onSubmit={ this.onSubmit }>
          <fieldset>
            <legend>
              <label htmlFor="search">
                <p>Add a City to your List</p>
              </label>
            </legend>
            <input type="text" placeholder="Enter City" name="search" id="search" required />
            <label htmlFor="listId">
              <p>Select a list.</p>
            </label>
            <select id="listId" name="listId">
              <option>Choose List</option>
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
          </fieldset>
        </form>
      </div>
    );
  };
};

AddCity.propTypes = {
  lists: PropTypes.array,
};


export default AddCity;