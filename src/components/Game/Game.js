import React, { Component } from 'react';
import Map from './Map/Map';
import { Route, Switch, BrowserRouter, NavLink, } from 'react-router-dom';
import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="Background" style={{display : 'block'}}>

      <NavLink to="/menu"> <div className="ProfileBtn"></div> </NavLink>
      <NavLink to="/menu"> <div className="MenuBtn"></div> </NavLink>

      <div className="GameContainer">
        <Map />
      </div>
      </div>
    );
  }
}

export default Game;
