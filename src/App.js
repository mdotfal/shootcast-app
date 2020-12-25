import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Registration from './components/Registration/Registration';
import store from './store';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

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
    authedUser: true,
    users,
    response: {},
  };
  
  componentDidMount = () => {
    this.setState( store );
  }

  handleDeleteList = list => {
    const newList = this.state.lists.filter( itm => itm !== list );
    this.setState({
      lists: newList,
    })
  }
  
  handleAddList = ( listName ) => {
    const newList = [
      ...this.state.lists,
      { 
        name: listName,
        id: uuidv4(), 
      },
    ];
    this.setState({
      lists: newList
    })
  }
  
  handleDeleteCity = city => {
    const newCities = this.state.cities.filter( itm => itm !== city );
    this.setState({
      cities: newCities,
    })
  }

  handleAddCity = ( cityName, listId ) => {
    const newCity = [
      ...this.state.cities,
      { 
        name: cityName,
        listId,
      }
    ];
    this.setState({
      cities: newCity,
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
    return (
      <main className='App'>
        <div className="container">
          <Switch>
            <Route 
              path={ [ '/home', '/lists/:listId' ] } 
              render={ routeProps => (
                authedUser 
                  ? <Home 
                      lists={ lists }
                      cities={ cities }
                      response={ this.state.response }
                      onAddList={ this.handleAddList }
                      onDeleteList={ this.handleDeleteList }
                      onAddCity={ this.handleAddCity } 
                      onDeleteCity={ this.handleDeleteCity }
                      onSignOut={ this.handleSignOut }
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
        </div>
      </main>
    );
  };
};

export default App;
