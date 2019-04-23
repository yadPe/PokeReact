import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserName from './UserName';
import PremierPokemon from './PremierPokemon';
import Trainer from './Trainer';
import '../../App.css';

class CreationProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      profil: {},
    };
  }

  saveInputs = (input) => {
    let { profil } = this.state;
    const { history } = this.props;
    if (input.type === 'usernameSubmit') {
      this.setState({
        profil: { ...profil, name: input.value },
        step: 2,
      });
    }

    if (input.type === 'trainerSubmit') {
      this.setState({
        profil: { ...profil, trainer: [input.value] },
        step: 3,
      });
    }
    if (input.type === 'pokemonSubmit') {
      profil = { ...profil, pokemon: [input.value] };
      this.setState({
        profil,
      }, () => {
        localStorage.setItem(profil.name, JSON.stringify(profil));
        history.push('/menu');
      });
    }
  }

  displayStep = () => {
    const { step, profil } = this.state;
    switch (step) {
      case 1:
        return <UserName sendInput={this.saveInputs} />;
      case 2:
        return <Trainer name={profil.name} sendInput={this.saveInputs} />;
      case 3:
        return <PremierPokemon name={profil.name} sendInput={this.saveInputs} />;
      default:
        return <UserName sendInput={this.saveInputs} />;
    }
  }

  render() {
    return (
      <div className="Background">
        {this.displayStep()}
      </div>
    );
  }
}

export default withRouter(CreationProfile);
