import React from 'react';
import './Character.css';

const Player = (props) => {
  const { direction, username } = props;
  return (
    <div className='characterContainer'>
      <div className='username'>{username}</div>
      <div className={direction} />
    </div>
    
  );
}

export default Player;
