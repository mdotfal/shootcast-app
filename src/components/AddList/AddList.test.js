import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddList from './AddList';

describe( `AddList component`, () => {
  it( `renders without errors`, () => {
    const wrapper = shallow( <AddList /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})