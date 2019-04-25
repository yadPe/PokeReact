import React from 'react';
import './Capture.css';
import { NavLink } from 'react-router-dom';
import '../../App.css';

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
          <h1 className="textModal">
                Hello
            {' '}
            {this.userName}
                !
                Well done! You captured the pokemon number
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
