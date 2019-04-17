import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Map from './Map/Map';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Background">

        <NavLink to="/menu">
          <div className="ProfileBtn" />
        </NavLink>

        <div className="RightMenu">
          <NavLink to="/menu">
            <div className="MenuBtn" />
          </NavLink>
          <NavLink to="/menu">
            <button type="button" className="RoundBtn"> ? </button>
          </NavLink>
        </div>

        <div className="GameContainer">
          <Map />
        </div>
      </div>
    );
  }
}

export default Game;
