import React from 'react';
import './Capture.css';
import { NavLink } from 'react-router-dom';

export default class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.pokemon = [];
  }


  getLocalStorage = () => {
    this.setState({
      userName: localStorage.getItem('userActive'),
      pokemon: localStorage.getItem(this.userName).pokemon,
    });
  }


  render() {
    const { winner } = this.props;


    return (

      <div
        className="blblblblbl"


        contentLabel=""
        style={{
          position: 'absolute', top: '35%', zIndex: '100', display: winner, backgroundColor: 'rgb(44, 88, 177)', border: '10px solid black',
        }}
      >

        <div className="footer">
          <h1>
                Hello
            {' '}
            {this.userName}
                !
                Well done! You captured
            {' '}
            {this.pokemon}
                !
          </h1>
          <NavLink to="/pokedex">
            <button type="button" className="Button"> Go to Pokedex </button>
          </NavLink>

        </div>
      </div>
    );
  }
}
