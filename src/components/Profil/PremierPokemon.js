/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import '../../App.css';
import Pikachu from '../../images/Pikachu.png';
import Bulbizarre from '../../images/Bulbizarre.png';
import Salameche from '../../images/Salameche.png';
import Carapuce from '../../images/Carapuce.png';


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
          <img className="pokemon RoundBtn FirstPokemonButton" id="Pikachu" src={Pikachu} alt="Pikachu" type="button" onClick={this.handleChange} />
          <img className="pokemon RoundBtn FirstPokemonButton" id="Bulbizarre" src={Bulbizarre} alt="Bulbizarre" type="button" onClick={this.handleChange} />
          <img className="pokemon RoundBtn FirstPokemonButton" id="Salamèche" src={Salameche} alt="Salamèche" type="button" onClick={this.handleChange} />
          <img className="pokemon RoundBtn FirstPokemonButton" id="Carapuce" src={Carapuce} alt="Carapuce" type="button" onClick={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default PremierPokemon;
