import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WeatherDisplay from './WeatherDisplay';

describe( `WeatherDisplay component`, () => {
  const data = {
    dt: 'test dt',
    main: {
      temp: 50
    },
    weather: [
      { description: "Test Description" }
    ]
  }

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <WeatherDisplay />, div );
    ReactDOM.unmountComponentAtNode( div ); 
  })
  
  it( `renders with data`, () => {
    const wrapper = shallow( <WeatherDisplay data={ data }/> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })

  it( `renders UI as expected`, () => {
    const wrapper = shallow( <WeatherDisplay /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })

})