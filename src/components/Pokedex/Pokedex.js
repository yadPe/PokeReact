import React, { Component } from 'react';
import './Pokedex.css';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from './Pokemon';
import { Route, Switch, BrowserRouter, NavLink, } from 'react-router-dom';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = { pokemon: {} };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then((data) => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  render() {
    const { pokemon } = this.state;
    return (
    <div className="Background">

      <NavLink to="/menu"> <div className="ProfileBtn"></div> </NavLink>
      <NavLink to="/menu"> <div className="MenuBtn"></div> </NavLink>

      <div className="Pokedex">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={pokemon} />
      </div>
      </div>
    );
  }
}

export default Pokedex;
