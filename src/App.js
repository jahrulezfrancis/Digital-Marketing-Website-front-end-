import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BlogSection from './Components/Pages/BlogPage';
import HomePage from './Components/Pages/Home';
import AboutIndex from './Components/Pages/Index/AboutIndex';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='/about-us' element={<AboutIndex />} />
          <Route path='/blog' element={<BlogSection />} />
        </Routes>
      </div>
    );
  }
}

export default App;
