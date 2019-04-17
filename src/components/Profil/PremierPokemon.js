/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';

class PremierPokemon extends Component {
  handleChange = (event) => {
    const input = {};
    input.type = 'pokemonSubmit';
    input.value = event.target.id;
    this.props.sendInput(input);
  }

  render() {
    return (
      <div>
        <h1>
          It's dangerous to go alone
              {' '}
          {`${this.props.name}`}
        </h1>
        <h2>Choose your Pokemon</h2>
        <div>
          <img className="pokemon" id="Pikachu" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="Pikachu" type="button" onClick={this.handleChange} />
          <img className="pokemon" id="Bulbizarre" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="Bulbizarre" type="button" onClick={this.handleChange} />
          <img className="pokemon" id="Salamèche" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="Salamèche" type="button" onClick={this.handleChange} />
          <img className="pokemon" id="Carapuce" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="Carapuce" type="button" onClick={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default PremierPokemon;
