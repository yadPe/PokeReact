import React from 'react';
import './Tiles.css';
import { TILE_SIZE } from '../../config';

const Tile = (props) => {
  const { data, position } = props;
  const theme = {
    width: `${TILE_SIZE}px`,
    height: `${TILE_SIZE}px`,
  }
  return <div className={`tile tile-${data} ${data} ${position}`} style={theme} />;
};

export default Tile;
