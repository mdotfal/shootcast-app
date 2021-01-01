import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Registration from './components/Registration/Registration';
import './App.css';
import config from './config';
import AppContext from './AppContext';

const users = [
  { 
    id: 1,
    username: 'Mike',
    password: 'pass123'
  },
  { 
    id: 2,
    username: 'test',
    password: 'pass123'
  },
];
class App extends Component {

  state = {
    cities: [],
    lists: [],
    authedUser: false,
    users,
    response: {},
  };
  
  componentDidMount = () => {

    const url = config.API_ENDPOINT;
    const listsObj = `${ url }/api/lists`;
    const citiesObj = `${ url }/api/cities`;

    Promise.all([
      fetch( listsObj ),
      fetch( citiesObj )
    ])
    .then( ([ listsObj, citiesObj ]) => {
      if( !listsObj.ok ) {
        return listsObj.json().then( e => Promise.reject( e ));
      }
      if( !citiesObj.ok ) {
        return citiesObj.json().then( e => Promise.reject( e ));
      }
      return Promise.all([ listsObj.json(), citiesObj.json() ]);
    })
    .then( ([ listsObj, citiesObj ]) => {
      this.setState({
        lists: listsObj, 
        cities: citiesObj
      })
    })
    .catch( err => err.message );
  }


  handleDeleteList = listId => {
    const newList = this.state.lists.filter( itm => itm.id !== listId );
    this.setState({
      lists: newList,
    })
  }
  
  handleAddList = ( listName ) => {
    this.setState({
      lists: [
        ...this.state.lists,
        listName
      ]
    })
  }
  
  handleDeleteCity = cityId => {
    const newCities = this.state.cities.filter( itm => itm.id !== cityId );
    this.setState({
      cities: newCities,
    })
  }

  handleAddCity = ( cityName, listId ) => {
    this.setState({
      cities: [
        ...this.state.cities,
        { cityName, listId }
      ],
    })
  }

  handleLogin = ( username, password ) => {
    const user = this.state.users.find( item => item.username.toLowerCase() === username.toLowerCase() );
    if( user && user.password === password ) {
      this.setState({
        authedUser: user,
      })
      return true;
    }
    return false;
  }

  handleSignOut = () => {
    this.setState({
      authedUser: false,
    })
  }

  handleRegistration = ( username, password ) => {
    const exsitingUser = this.state.users.find( item => item.username.toLowerCase() === username.toLowerCase() );
    if( exsitingUser ) {
      return false;
    };
    const newUsers = [
      ...this.state.users,
      { username, password },
    ];
    this.setState({
      users: newUsers,
    })
    return true;
  }
  
  render() {
    const { cities, lists, authedUser } = this.state;

    const value = {
      lists,
      cities,
      onAddCity: this.handleAddCity,
      onDeleteCity: this.handleDeleteCity,
      onSignOut: this.handleSignOut,
      onAddList: this.handleAddList,
      onDeleteList: this.handleDeleteList,
    }

    return (
      <AppContext.Provider value={ value }>
        <main className='App'>
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route 
                  path={ [ '/home', '/lists/:listId' ] } 
                  render={ routeProps => (
                    authedUser 
                      ? <Home 
                          cities={ cities }
                          response={ this.state.response }
                          { ...routeProps }
                        />
                      : <Redirect to='/' />
                )}/>
                <Route 
                  path='/registration' 
                  render={ () => (
                    <Registration
                      handleRegistration={ this.handleRegistration }
                    />
                )}/>
                <Route render={ () => (
                  <Landing 
                    handleLogin={ this.handleLogin }
                    authedUser={ authedUser }
                  />
                )}/>
              </Switch>
            </BrowserRouter>
          </div>
        </main>
      </AppContext.Provider>
    );
  };
};

export default App;
