/* eslint-disable jest/valid-describe */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Landing from './Landing';

describe( 'Landing Component', () => {
  test( 'should render', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Landing />
        </BrowserRouter>
      ).toJSON();
    expect( component ).toMatchSnapshot();
  })

  it( 'renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
      ,div );
    ReactDOM.unmountComponentAtNode( div );
  })
})

