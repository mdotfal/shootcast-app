import React, { Component } from 'react';

class AddCity extends Component {

  render() {
    return (
      <div className="addcity">
        <form className="addcity-form">
          <label htmlFor="search"></label>
          <input type="text" placeholder="Enter City" name="search" id="search" required />
          <button>+</button>
        </form>
      </div>
    );
  };
};

export default AddCity;