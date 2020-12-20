import React, { Component } from 'react';

class AddCity extends Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddCity( e.target.search.value )
  }

  render() {
    return (
      <div className="addcity">
        <form className="addcity-form" onSubmit={ this.onSubmit }>
          <label htmlFor="search"></label>
          <input type="text" placeholder="Enter City" name="search" id="search" required />
          <button
            type="submit"
          >+</button>
        </form>
      </div>
    );
  };
};

export default AddCity;