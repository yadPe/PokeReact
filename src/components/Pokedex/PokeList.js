import React from 'react';
import './PokeList.css';
import PokeCell from './PokeCell';
import { pokeClasses } from './PokeClasses';

const PokeList = () => {
    const cells = pokeClasses.map(pokeClass => <PokeCell key={pokeClass.id} pokeClass={pokeClass}/>)
    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default PokeList;