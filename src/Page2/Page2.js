import React, { Component } from 'react';
import './Pokedex.css';
import PokeList from './PokeList';

class Pokedex extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Pokedex">
                <PokeList />
            </div>
        );
    }
}

export default Pokedex;