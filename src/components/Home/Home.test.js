import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe( `Home component`, () => {

  const div = document.createElement( 'div' );
  const defaultProps = {
    match: { params: { list_id: 1 }}
  };
  const cities = [
    { name: "San Francisco", list_id: 1 },
    { name: "Castro Valley", list_id: 2 }
  ];

  it( `renders the UI as expected`, () => {
    const tree = renderer
      .create( 
        <BrowserRouter>
          <Home/>
        </BrowserRouter>)
      .toJSON();
    expect( tree ).toMatchSnapshot();
  });

  it( 'renders without errors', () => {
    ReactDOM.render( 
      <BrowserRouter>
        <Home { ...defaultProps } { ...cities } />
      </BrowserRouter>
      , div );
    ReactDOM.unmountComponentAtNode( div );
  });
});