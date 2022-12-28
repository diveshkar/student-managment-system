import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';
import SignUp from './Components/SignUp';


class App extends Component {
  render() {
  return(
    <div className='App'>
      <Navbar1></Navbar1>
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="log" element={ <Login/>} />
      <Route path="/SignUp" element={ <SignUp />} />
      </Routes>
      
      
    </div>
  );
}
}

export default App;