import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddList from './AddList';

describe( `AddList component`, () => {

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <AddList />, div );
    ReactDOM.unmountComponentAtNode( div );
  });

  it( `renders without errors`, () => {
    const wrapper = shallow( <AddList /> );
    expect( toJson( wrapper )).toMatchSnapshot();
  });
});