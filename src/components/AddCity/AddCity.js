import React, { Component } from 'react';

class AddCity extends Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddCity( e.target.search.value, e.target.listId.value )
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
            { this.props.lists.map( ( list, i ) => 
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