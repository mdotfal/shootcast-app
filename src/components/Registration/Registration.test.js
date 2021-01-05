/* eslint-disable jest/valid-describe */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Registration from './Registration';

describe( 'Registration Component', () => {
  test( 'should render', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>
      ).toJSON();
    expect( component ).toMatchSnapshot();
  })
})