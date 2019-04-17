import React from 'react';
import './Tiles.css';

const Tile = (props) => {
  const { data, position } = props;
  return <div className={`tile tile-${data} ${position}`} key={position} />;
};

export default Tile;
