import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav';


describe( `Nav component`, () => {
  it( `renders without errors`, () => {
    const wrapper = shallow( <Nav /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( 
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      , div );
    ReactDOM.unmountComponentAtNode( div );
  })
})