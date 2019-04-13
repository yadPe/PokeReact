import React from 'react';
import './Tile.css';
const MapTile = (props) => {
  const { data } = props;

  return (
    <div className={`tile tile-${data}`}/>
  );
};

export default MapTile;
