import React from 'react';
<<<<<<< HEAD
import CreationProfile from '../Profil/CreationProfile';


const Home = () => (
  <div>
<<<<<<< HEAD
    <h2>Bienvenue sur la Page 1 !</h2>
    <CreationProfile />
=======
   <h1>Welcome to PokeReact !</h1>
>>>>>>> dev
=======
import { NavLink } from 'react-router-dom';
import '../../App.css';
import logo from '../../images/Logo.png';

const Home = () => (
  <div className="Home">
    <img src={logo} className="Logo" alt="PokeReact logo" />
    <NavLink to="/menu">
      <button type="button" className="Button"> Play now ! </button>
    </NavLink>
>>>>>>> dev
  </div>
);

export default Home;