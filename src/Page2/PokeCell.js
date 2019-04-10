import React from 'react';
import './PokeCell.css';
import sprites from './BBimg/sprites.png';

const PokeCell = ({ pokeClass }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

    return <button style={style} className="poke-cell"></button>;
};

export default PokeCell;