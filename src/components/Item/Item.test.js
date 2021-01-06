import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Item from './Item';

describe( `Item component`, () => {
  
  const params = {
    city: {
      name: "San Francisco"
    }
  }

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Item />, div );
    ReactDOM.unmountComponentAtNode( div );
  })

  it( `renders with params`, () => {
    const wrapper = shallow( <Item { ...params }/> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})