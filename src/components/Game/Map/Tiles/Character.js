import React, { Component } from 'react';
import './Character.css';

const Player = (props) => {
  const { direction } = props;
  return (
    <div className={direction} />
  );
}

export default Player;
