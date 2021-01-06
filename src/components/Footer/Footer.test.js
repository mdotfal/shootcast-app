import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

describe( `Footer component`, () => {

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Footer />, div );
    ReactDOM.unmountComponentAtNode( div );
  })

  it( `renders without errors`, () => {
    const wrapper = shallow( <Footer /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})