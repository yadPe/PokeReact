import React, { Component } from 'react';
import './Character.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { direction } = this.props;
    return (
      <div className={direction} />
    );
  }
}

export default Player;
