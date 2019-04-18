/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import '../../App.css';

class Trainer extends Component {
  handleChange = (event) => {
    const { sendInput } = this.props;
    const input = {};
    input.type = 'trainerSubmit';
    input.value = event.target.id;
    sendInput(input);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          What trainer would you like to be
          {' '}
          {`${name}`}
          ?
        </h1>
        <br />
        <h2>Choose your Trainer</h2>
        <div>
          <img className="RoundBtn FirstPokemonButton" id="Red" src="https://www.pokepedia.fr/images/d/d9/Sprite_3_f_Red.png" alt="Red" type="button" onClick={this.handleChange} />
          <img className="RoundBtn FirstPokemonButton" id="Leaf" src="https://www.pokepedia.fr/images/b/bc/Sprite_3_f_Leaf.png" alt="Leaf" type="button" onClick={this.handleChange} />
          <img className="RoundBtn FirstPokemonButton" id="Ludwig" src="https://www.pokepedia.fr/images/b/b2/Sprite_5_n_Ludwig.png" alt="Ludwig" type="button" onClick={this.handleChange} />
          <img className="RoundBtn FirstPokemonButton" id="Ludvina" src="https://www.pokepedia.fr/images/d/d2/Sprite_5_n_Ludvina.png" alt="Ludvina" type="button" onClick={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default Trainer;
