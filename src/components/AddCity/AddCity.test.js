import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddCity from './AddCity';
import AppContext from '../../AppContext';

describe.skip( `AddCity component`, () => {

  it( `renders without crashing`, () => {
    const div = document.createElement( 'div' );
    ReactDOM.render(
      <AppContext.Provider>
        <AddCity />
      </AppContext.Provider> 
    , div )
    ReactDOM.unmountComponentAtNode( div );
  })

  it( `renders without errors`, () => {
    const wrapper = shallow( 
      <AppContext.Provider>
        <AddCity /> 
      </AppContext.Provider>
    )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})