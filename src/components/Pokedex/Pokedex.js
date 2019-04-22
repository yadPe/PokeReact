import React, { Component } from 'react';
import './Pokedex.css';
import { NavLink } from 'react-router-dom';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from './Pokemon';
import Divider from './Divider';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillMount() {
    this.fetchApi(1);
  }

  fetchApi = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then((data) => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  handleOnClick(id) {
    this.fetchApi(id);
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="Background">

        <NavLink to="/menu">
          <div className="ProfileBtn" />
        </NavLink>
        <NavLink to="/menu">
          <div className="MenuBtn" />
        </NavLink>

        <div className="Pokedex">
          <PokeList handleOnClick={this.handleOnClick} />
          <Divider />
          <DetailView pokemon={pokemon} getNewState={this.newPokemon} />
        </div>
      </div>
    );
  }
}

export default Pokedex;
