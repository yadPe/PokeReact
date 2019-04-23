/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import '../../App.css';


class PremierPokemon extends Component {
  handleChange = (event) => {
    const { sendInput } = this.props;
    const input = {};
    input.type = 'pokemonSubmit';
    input.value = event.target.id;
    sendInput(input);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          It is dangerous to go alone
          {' '}
          {`${name}`}
          !!!
        </h1>
        <br />
        <h2>Choose your Pokemon</h2>
        <div>
          <img className="pokemon RoundBtn FirstPokemonButton" id="Pikachu" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="Pikachu" type="button" onClick={this.handleChange} />
          <img className="pokemon RoundBtn FirstPokemonButton" id="Bulbizarre" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="Bulbizarre" type="button" onClick={this.handleChange} />
          <img className="pokemon RoundBtn FirstPokemonButton" id="Salamèche" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="Salamèche" type="button" onClick={this.handleChange} />
          <img className="pokemon RoundBtn FirstPokemonButton" id="Carapuce" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="Carapuce" type="button" onClick={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default PremierPokemon;
