import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Registration from './components/Registration/Registration';
import Nav from './components/Nav/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import ListPage from './components/ListPage/ListPage';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'
import store from './store';
import './components/Main/Main.css';

class App extends Component {

  state = {
    cities: [],
    lists: []
  };

  componentDidMount = () => {
    this.setState( store );
  }

  handleDeleteList = list => {
    const newList = this.state.lists.filter( itm => itm !== list );
    this.setState({
      lists: newList
    })
  }
  
  handleAddList = ( listName ) => {
    const newList = [
      ...this.state.lists,
      { name: listName }
    ];
    this.setState({
      lists: newList
    })
  }
  
  handleDeleteCity = city => {
    const newCities = this.state.cities.filter( itm => itm !== city );
    this.setState({
      cities: newCities
    })
  }

  handleAddCity = ( cityName ) => {
    const newCity = [
      ...this.state.cities,
      { name: cityName }
    ];
    this.setState({
      cities: newCity
    })
  }
  
  render() {
    const { cities, lists } = this.state;
    // console.log( 'App',this.state );
    return (
      <main className='App'>
        <div className="container">
          <Route path='/nav' component={ Nav }/>
          <Route 
            path='/' 
            render={ () =>
              <Main 
                cities={ cities } 
                lists={ lists }
                onDeleteList={ this.handleDeleteList }
                onAddList={ this.handleAddList }
                onDeleteCity={ this.handleDeleteCity }
                onAddCity={ this.handleAddCity }
              />
            }/>
          <Route path='/landing' component={ Landing }/> 
          <Route path='/registration' component={ Registration }/>
        </div>
      </main>
    );
  };
};

export default App;
