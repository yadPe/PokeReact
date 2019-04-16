import React from 'react';
import '../../App.css';
import logo from '../../images/Logo.png';
import { Route, Switch, BrowserRouter, NavLink, } from 'react-router-dom';

const Home = () => (
  <div className="Home">
  
    <img src={logo} className="Logo" alt="PokeReact logo" />
    <NavLink to="/menu"> <button className="HomeBtn"> Play now ! </button> </NavLink>

  </div>
);

export default Home;