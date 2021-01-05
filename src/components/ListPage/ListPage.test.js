import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListPage from './ListPage';

describe( `ListPage component`, () => {
  it( `renders without errors`, () => {
    const cities = [
      { name: "San Francisco", list_id: 1 },
      { name: "Castro Valley", list_id: 2 }
    ]
    const wrapper = shallow( <ListPage cities={ cities } /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})