import React, { Component } from 'react';
import UserName from './UserName';
import PremierPokemon from './PremierPokemon';

class CreationProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      profil: {},
    };
  }

  saveInputs = (input) => {
    if (input.type === 'usernameSubmit') {
      this.setState({
        profil: { ...this.state.profil, name: input.value }, 
        step: 2,
      });
    }
    		
    if (input.type === 'trainerSubmit') {
      this.setState({
        profil: { ...this.state.profil, trainer: input.value  },        
      });
    }
    if (input.type === 'pokemonSubmit') {
      this.setState({
        profil: { ...this.state.profil, pokemon: [input.value] },
      }, () => localStorage.setItem(this.state.profil.name, JSON.stringify(this.state.profil)));
    }
  }

  render() {
    return (
      <div>
      {this.state.step === 1 ? <UserName sendInput={this.saveInputs} /> : <PremierPokemon name={this.state.profil.name} sendInput={this.saveInputs}/>}        
      </div>
    );
  }
}

export default CreationProfile;
