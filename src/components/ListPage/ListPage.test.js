import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListPage from './ListPage';

describe( `ListPage component`, () => {

  const cities = [
    { name: "San Francisco", list_id: 1 },
    { name: "Castro Valley", list_id: 2 }
  ];

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <ListPage cities={ cities }/>, div );
    ReactDOM.unmountComponentAtNode( div );
  });

  it( `renders with cities`, () => {
    const wrapper = shallow( <ListPage cities={ cities } /> );
    expect( toJson( wrapper )).toMatchSnapshot();
  });
  
  it( `renders without cities`, () => {
    const wrapper = shallow( <ListPage cities={[]} /> );
    expect( toJson( wrapper )).toMatchSnapshot();
  });
});