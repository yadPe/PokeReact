import React from 'react';
import './Character.css';
import { TILE_SIZE } from '../../config';

const Player = (props) => {
  const { direction, username } = props;
  const theme = {
    width: `${TILE_SIZE}px`,
    height: `${TILE_SIZE}px`,
  }
  return (
    <div className='characterContainer' style={theme}>
      <div className={`${direction} character`} style={theme}/>
    </div>
  );
}

export default Player;
