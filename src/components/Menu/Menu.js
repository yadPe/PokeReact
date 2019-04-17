import React from 'react';
import '../../App.css';
import logo from '../../images/Logo.png';
import { Route, Switch, BrowserRouter, NavLink, } from 'react-router-dom';

const Menu = () => (
  <div className="Background">
    
    <NavLink to="/play"> <div className="ProfileBtn"></div> </NavLink>
    <img src={logo} className="MenuLogo" alt="PokeReact logo" />
    <NavLink to="/play"> <div className="MenuBtn"></div> </NavLink>

    <NavLink to="/play"> <button className="HomeBtn">Catch ‘em all!</button> </NavLink>
    <NavLink to="/play"> <button className="HomeBtn">Versus</button> </NavLink>
    <NavLink to="/pokedex"> <button className="HomeBtn">Pokedex</button> </NavLink>
    
  </div>
);

export default Menu;
