import React, { Component } from 'react';
import Map from './Map/Map';
import { Route, Switch, BrowserRouter, NavLink, } from 'react-router-dom';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="Background">

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
