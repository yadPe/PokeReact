import React, { Component } from 'react';
import './Character.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log(this.props.activeKeys)
    return (
      <div className={this.props.direction} />
    );
  }
}

export default Player;
