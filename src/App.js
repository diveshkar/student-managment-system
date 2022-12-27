import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';


class App extends Component {
  render() {
  return(
    <div className='App'>
      <Navbar1></Navbar1>
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="log" element={ <Login/>} />
      </Routes>
      
      
    </div>
  );
}
}

export default App;