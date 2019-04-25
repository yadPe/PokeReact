import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.direction} />
    );
  }
}

export default Character;
