import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WeatherDisplay from './WeatherDisplay';

describe( `WeatherDisplay component`, () => {
  it( `renders without errors`, () => {
    const data = {
      dt: 'test dt',
      main: {
        temp: 50
      },
      weather: [
        { description: "Test Description" }
      ]
    }
    const wrapper = shallow( <WeatherDisplay data={ data }/> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})