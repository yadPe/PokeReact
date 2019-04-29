/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Pikachu from '../../images/Pikachu.png';
import Bulbizarre from '../../images/Bulbizarre.png';
import Salameche from '../../images/Salameche.png';
import Carapuce from '../../images/Carapuce.png';
import Red from '../../images/Red.png';
import Leaf from '../../images/Leaf.png';
import Ludwig from '../../images/Ludwig.png';
import Ludvina from '../../images/Ludvina.png';
import '../../App.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [],
    };
  }

  componentDidMount() {
    const name = localStorage.getItem('userActive0');
    const name2 = localStorage.getItem('userActive1');
    const { profils } = this.state;
    const { match } = this.props;
    if (match.params.multiplayer) {
      profils.push(JSON.parse(localStorage.getItem(name)));
      profils.push(JSON.parse(localStorage.getItem(name2)));
    } else {
      profils.push(JSON.parse(localStorage.getItem(name)));
    }

    this.setState({ profils });
  }

  recupTrainer = (profil) => {
    if (!profil.trainer) return '';
    switch (profil.trainer[0]) {
      case 'Red':
        return <img className="Presentation" id="Red" src={Red} alt="Red" />;
      case 'Leaf':
        return <img className="Presentation" id="Leaf" src={Leaf} alt="Leaf" />;
      case 'Ludwig':
        return <img className="Presentation" id="Ludwig" src={Ludwig} alt="Ludwig" />;
      case 'Ludvina':
        return <img className="Presentation" id="Ludvina" src={Ludvina} alt="Ludvina" />;
      default:
        return <img className="Presentation" id="Red" src={Red} alt="Red" />;
    }
  }

  recupPokemon = (profil) => {
    if (!profil.pokemon) return '';
    switch (profil.pokemon[0]) {
      case '25':
        return <img className="Presentation" id="25" src={Pikachu} alt="Pikachu" />;
      case '1':
        return <img className="Presentation" id="1" src={Bulbizarre} alt="Bulbizarre" />;
      case '4':
        return <img className="Presentation" id="4" src={Salameche} alt="Salamèche" />;
      case '7':
        return <img className="Presentation" id="7" src={Carapuce} alt="Carapuce" />;
      default:
        return <img className="Presentation" id="25" src={Pikachu} alt="Pikachu" />;
    }
  }

  render() {
    const { profils } = this.state;
    const profilInformation = (userProfils) => {
      const out = [];
      const template = profil => (
        <div>
          <div>
            <p>
              <span className="Yellow">
                You're now loged in as
              </span>
              {' '}
              {profil.name}
            </p>
            <div className="changeProfil">
              <span>
                I'm not
              </span>
              {' '}
              {profil.name}
              .
              {' '}
              <NavLink to="./" className="Yellow">
                {' '}
                Use an other profil.
              </NavLink>
            </div>
          </div>
          <div>
            <p>
              Trainer style:
              {' '}
              {this.recupTrainer(profil)}
            </p>
          </div>
          <div>
            <p>
              First Pokemon:
              {' '}
              {this.recupPokemon(profil)}
            </p>
          </div>
        </div>
      );

      userProfils.map(profil => out.push(template(profil)));
      return out;
    };

    return (
      <div className="Background">
        <div className="LeftMenu">
          <NavLink to="/menu">
            <button type="button" className="RoundBtn">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </NavLink>
        </div>

        {profilInformation(profils)}

      </div>
    );
  }
}

export default withRouter(Profile);
