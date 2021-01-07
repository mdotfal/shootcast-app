import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CurrentWeather from './CurrentWeather';

describe( `CurrentWeather component`, () => {
  it( `renders without errors`, () => {
    const wData = {
      name: "Test name",
      main: [
        { temp: 50 }
      ],
      weather: [
        { description: "test description" }
      ],
      sys: {
        sunset: "123456"
      }
    };
    const wrapper = shallow( <CurrentWeather wData = { wData }/> );
    expect( toJson( wrapper )).toMatchSnapshot();
  });
});