import React from 'react';
import './Character.css';

const Player = (props) => {
  const { direction } = props;
  return (
    <div className="characterContainer">
      <div className={`${direction} character`} />
    </div>
  );
};

export default Player;
