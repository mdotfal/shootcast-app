import React, { Component } from 'react';
import Main from './components/Main/Main';
import store from './store';

class App extends Component {

  state = {
    cities: [],
    lists: []
  };

  componentDidMount = () => {
    this.setState( store );
  }
  
  render() {
    // console.log( 'App',this.state );
    return (
      <main className='App'>
        <Main 
          cities={ this.state.cities } 
          lists={ this.state.lists }
        />
      </main>
    );
  };
};

export default App;
