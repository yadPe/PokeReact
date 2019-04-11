import React, { Component } from 'react';
import Map from './Map/Map';
import maps from '../../assets/maps/001.txt';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //let ok = reqMaps(reqMaps.keys()[0])
    console.log(map)
    return (
      <div className="gameContainer">
        <button type="button">Play Now !</button>
        <Map/>
      </div>
    );
  }
}

export default Game;
