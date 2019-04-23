import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Pokedex.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
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

        <div className="LeftMenu">
          <NavLink to="/menu">
            <button type="button" className="RoundBtn">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </NavLink>
        </div>

        <div className="RightMenu">
          <NavLink to="/menu">
            <button type="button" className="RoundBtn">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </NavLink>
        </div>

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
