import React from 'react';
import './Capture.css';
import { NavLink } from 'react-router-dom';
import '../../App.css';

export default class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.pokemon = [];
    this.state = {
      x: -1000,
    }
    this.theme = {
      position: 'fixed',
      top: '20%',
      zIndex: '100',
      display: 'block',
      backgroundColor: 'rgb(44, 88, 177)',
      border: '10px solid black',
      transition: 'all 800ms',
    }
  }

  componentDidMount() {

    // const position;
    // if (player === 1) {
    //   theme.left = '0px';
    // } else {
    //   position.right = '0px';
    // }


    setTimeout(() => {
      this.setState({ x: 0 }, () => setTimeout(() => this.setState({ x: -1000 }), 1500))
    }, 800);
  }


  render() {
    const { pokemon, player } = this.props;
    const { x } = this.state;
    console.log(this.state.x)
    let pos = {};
    if (player === 1) {
      //this.theme.left = `${x}px`;
      pos.left = `${x}px`;
    } else {
      //this.theme.right = `${x}px`;
      pos.right = `${x}px`;
    }
    

    return (

      <div
        className="alert"
        style={{...this.theme, ...pos}}
      >

        <div className="footer">
          <h1 className="textModal">{`${player} catched ${pokemon}`}</h1>
          <NavLink to="/pokedex">
            <button type="button" className="Button"> Go to Pokedex </button>
          </NavLink>

        </div>
      </div>
    );
  }
}
