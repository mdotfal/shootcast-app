/* eslint-disable jest/valid-expect */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

it( `renders correctly without crashing`, () => {
  const wrapper = shallow( <Home { ...this.props }/> );
  expect( toJson( wrapper )).toMatchSnapshot();
})