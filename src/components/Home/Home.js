import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import logo from '../../images/Logo.png';

const Home = () => (
  <div className="Home">
    <img src={logo} className="Logo" alt="PokeReact logo" />
    <NavLink to="/creation">
      <button type="button" className="Button"> Play now ! </button>
    </NavLink>
  </div>
);

export default Home;
