import React from 'react';
import front from '../../../../images/sacha/front.png';

const Character = () => (
  <div
    className="character"
    style={{
      backgroundImage: `url(${front})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '64px',
      height: '64px',
      position: 'absolute',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
      zIndex: 10,
    }}
  />

);

export default Character;
