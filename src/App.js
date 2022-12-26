import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
  return(
    <div className='App'>
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="log" element={ <Login/>} />
      </Routes>
      
      
    </div>
  );
}
}

export default App;