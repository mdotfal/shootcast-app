import React from 'react';

const AppContext = React.createContext({
  lists: [],
  cities: [],
  onAddCity: () => {},
  onDeleteCity: () => {},
  onAddList: () => {},
  onDeleteList: () => {},
  onSignOut: () => {},
})

export default AppContext;