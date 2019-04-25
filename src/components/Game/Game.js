import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Map from './Map/Map';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.asyncKeys = [];
    this.controls = [ 38, 40, 37, 39, 87, 83, 65, 68]
  }

  componentDidMount() {
    for (let i = 0; i < Object.keys(this.controls[0]).length * (this.props.players || 1); i += 1) {
      this.asyncKeys.push(false);
    }
    document.body.addEventListener('keydown', this.keyPressed);
    document.body.addEventListener('keyup', this.keyReleased);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.keyPressed);
    document.body.removeEventListener('keyup', this.keyReleased);
  }

  keyPressed = (e) => {
    const keys = e.keyCode;
    const size = this.controls.length;

    for (let i = 0; i < size; i += 1) {
      if (this.controls[i] === keys && !this.asyncKeys[i]) {
        this.asyncKeys[i] = keys;
        this.setState({asyncKeys: this.asyncKeys})
        break;
      }
    }
  }

  keyReleased = (e) => {
    const keys = e.keyCode;
    const size = this.controls.length;

    for (let i = 0; i < size; i += 1) {
      if (this.controls[i] === keys && this.asyncKeys[i]) {
        this.asyncKeys[i] = false;
        this.setState({asyncKeys: this.asyncKeys})
        break;
      }
    }
  }

  createGameInstances = (num) => {
    const instances = [];
    for (let i = 0; i < num; i++) {
      instances.push(<div className="instanceContainer"><Map controller={i} reportPosition={this.getPlayersPosition} controls={this.controls.slice(4*i, this.controls.length*(0.5*(i+1)))} asyncKeys={this.asyncKeys.slice(4*i, this.controls.length*(0.5*(i+1)))} /></div>)
    }
    return instances
  }

  getPlayersPosition = (data) => {
    console.log(data)
  }


  render() {
    return (
      <div className="Background" style={{ display: 'block' }}>

        <div className="LeftMenu">
          <NavLink to="/profil">
            <button type="button" className="RoundBtn">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </NavLink>
        </div>

        <div className="RightMenu">
          <NavLink to="/menu">
            <button type="button" className="RoundBtn">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </NavLink>
          <NavLink to="/commands">
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
