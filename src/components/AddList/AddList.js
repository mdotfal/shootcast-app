import React, { Component } from 'react';
import './AddList.css';

class AddList extends Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddList( e.target.inputList.value )
  }

  render() {
    // console.log('addlist', this.props )
    return (
      <div className="addlist">
        <form className="addlist-form" onSubmit={ this.onSubmit }>
          <label htmlFor="inputList"></label>
          <input type="text" placeholder="Enter List Name" name="inputList" id="inputList" required />
          <button
            type="submit" 
          >+</button>
        </form>
      </div>
    );
  };
};

export default AddList;