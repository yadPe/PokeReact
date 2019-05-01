import React from 'react';
import './Tiles.css';
import { TILE_SIZE } from '../../config';

const Tile3D = (props) => {
  const { data, position } = props;
  const theme = {
    width: `${TILE_SIZE}px`,
    height: `${TILE_SIZE}px`,
  }
  return (
    <div className="tile3DContainer" style={theme}>
      {data.map((tile, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={`tile3D tile-${tile === -1 ? 'collide' : tile} ${tile} ${position}`} key={index} style={theme} />
      ))}
    </div>
  );
};

export default Tile3D;
