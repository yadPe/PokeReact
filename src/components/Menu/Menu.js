import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import logo from '../../images/Logo.png';

const Menu = () => (
  <div className="Background">
    <NavLink to="/play">
      <div className="ProfileBtn" />
    </NavLink>
    <img src={logo} className="MenuLogo" alt="PokeReact logo" />
    <div className="RightMenu">

    <NavLink to="/play">
        <button type="button" className="RoundBtn"> ? </button>
      </NavLink>
    </div>

    <NavLink to="/play">
      <button type="button" className="Button"> Catch ‘em all! </button>
    </NavLink>
    <NavLink to="/playvs">
      <button type="button" className="Button"> Versus </button>
    </NavLink>
    <NavLink to="/pokedex">
      <button type="button" className="Button"> Pokedex </button>
    </NavLink>
  </div>
);

export default Menu;
