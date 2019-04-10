import React from 'react';


const MapTile = (props) => {
  const theme = {
    display: 'inline-flex',
    width: '32px',
    height: '32px',
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} )`,
    margin: 0,
  };
  return (
    <div className={`tile${props.index}`} style={theme} />
  );
};

export default MapTile;
