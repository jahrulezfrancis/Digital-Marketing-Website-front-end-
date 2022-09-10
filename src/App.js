import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
