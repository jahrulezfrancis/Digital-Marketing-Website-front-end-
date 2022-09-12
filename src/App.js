import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import { AboutUs } from './Components/Pages/AboutUs';
import HomePage from './Components/Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </div>
    );
  }
}

export default App;
