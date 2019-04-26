import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

export default class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.pokemon = [];
  }

  getLocalStorage = () => {
    this.userName = localStorage.getItem('userActive');
    this.pokemon = JSON.parse(localStorage.getItem(this.userName)).pokemon;
  }

  render() {
    const { catched } = this.props;

    return (
      <div className="Caught" style={{ display: winner }}>
        <div>
          <p>{`Well done ! You captured ${catched.name} !!!!!`}</p>
          <NavLink to="/pokedex">
            <button type="button" className="Button"> Go to Pokedex </button>
          </NavLink>
          <NavLink to="/play">
            <button type="button" className="Button"> Play again </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
