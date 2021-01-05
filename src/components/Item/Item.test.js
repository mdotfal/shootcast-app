import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Item from './Item';

describe( `Item component`, () => {
  it( `renders without errors`, () => {
    const params = {
      city: {
        name: "San Francisco"
      }
    }
    const wrapper = shallow( <Item { ...params }/> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})