import React from 'react';
import './PokeList.css';
import PokeCell from './PokeCell';
import pokeClasses from './PokeClasses';

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => (
    <PokeCell
      key={pokeClass.id}
      pokeClass={pokeClass}
      handleOnClick={handleOnClick}
    />
  ));

  return (
    <section className="poke-list">
      {cells}
    </section>
  );
};

export default PokeList;
