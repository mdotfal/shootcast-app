import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidebar from './Sidebar';


describe.skip( `Sidebar component`, () => {
  it( `renders without errors`, () => {
    const wrapper = shallow( <Sidebar /> );
    expect( toJson( wrapper )).toMatchSnapshot();
  })
})