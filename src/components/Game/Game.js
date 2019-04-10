import React, { Component } from 'react';
import Map from './Map/Map';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="gameContainer">
        <button type="button">Play Now !</button>
        <Map />
      </div>
    );
  }
}

export default Game;
