import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Map from './Map/Map';
import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  createGameInstances = (num) => {
    const instances = [];
    for (let i = 0; i < num; i++) {
      instances.push(<div className="instanceContainer"><Map controller={i} reportPosition={this.getPlayersPosition}/></div>)
    }
    return instances
  }

  getPlayersPosition = (data) => {
    console.log(this.data)
  }


  render() {
    return (
      <div className="Background" style={{ display: 'block' }}>

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

        <div className='gameContainer'>
          {this.createGameInstances(this.props.players || 1)}
        </div>
      </div>
    );
  }
}

export default Game;
