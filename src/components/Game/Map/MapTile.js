import React from 'react';

const reqTiles = require.context('../../../assets/tiles', true, /\.png$/);


const MapTile = (props) => {
  const { index, data } = props;
  const keys = reqTiles.keys().sort((a, b) => a.split('-')[0].substring(2, a.split('-')[0].lenght) - b.split('-')[0].substring(2, b.split('-')[0].lenght));

  const theme = {
    float: 'left',
    width: '64px',
    height: '64px',
    backgroundImage: `url(${reqTiles(keys[data], true)})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    imageRendering: 'pixelated',
    backgroundRepeat: 'noRepeat',
  };


  return (
    <div className={`tile tile-${index}`} style={theme} />
  );
};

export default MapTile;
