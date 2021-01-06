import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';


describe( `Sidebar component`, () => {
  const cities = [
    { name: "San Francisco", list_id: 1 },
    { name: "Castro Valley", list_id: 2 }
  ]

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Sidebar cities={ cities }/>, div );
    ReactDOM.unmountComponentAtNode( div );
  })

  it( `renders the UI as expected`, () => {
    const tree = renderer
      .create( <Sidebar cities={ cities } /> )
      .toJSON();
    expect( tree ).toMatchSnapshot();
  })

  it( `renders the UI with no cities`, () => {
    const tree = renderer
      .create( <Sidebar cities={[]} /> )
      .toJSON();
    expect( tree ).toMatchSnapshot();
  })
})