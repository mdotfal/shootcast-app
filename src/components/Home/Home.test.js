import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

describe( `Home component`, () => {
  it( `renders without errors`, () => {
    const defaultProps = {
      match: { params: { list_id: 1 }}
    }
    const cities = [
      { name: "San Francisco", list_id: 1 },
      { name: "Castro Valley", list_id: 2 }
    ]
    const wrapper = shallow( <Home { ...defaultProps } { ...cities }/> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})