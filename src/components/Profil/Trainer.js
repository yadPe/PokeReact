/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import '../../App.css';
import Red from '../../images/Red.png';
import Leaf from '../../images/Leaf.png';
import Ludwig from '../../images/Ludwig.png';
import Ludvina from '../../images/Ludvina.png';

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
          <img className="RoundBtn FirstPokemonButton" id="Red" src={Red} alt="Red" type="button" onClick={this.handleChange} />
          <img className="RoundBtn FirstPokemonButton" id="Leaf" src={Leaf} alt="Leaf" type="button" onClick={this.handleChange} />
          <img className="RoundBtn FirstPokemonButton" id="Ludwig" src={Ludwig} alt="Ludwig" type="button" onClick={this.handleChange} />
          <img className="RoundBtn FirstPokemonButton" id="Ludvina" src={Ludvina} alt="Ludvina" type="button" onClick={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default Trainer;
