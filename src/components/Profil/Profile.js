/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Pikachu from '../../images/Pikachu.png';
import Bulbizarre from '../../images/Bulbizarre.png';
import Salameche from '../../images/Salameche.png';
import Carapuce from '../../images/Carapuce.png';
import Percila from '../../assets/characters/character_1__Percila.png';
import Kunz from '../../assets/characters/character_2__Kunz.png';
import Iris from '../../assets/characters/character_3__Iris.png';
import Matis from '../../assets/characters/character_4__Matis.png';
import Bardane from '../../assets/characters/character_5__Bardane.png';
import Inezia from '../../assets/characters/character_6__Inezia.png';
import Artie from '../../assets/characters/character_7__Artie.png';
import Strykna from '../../assets/characters/character_8__Strykna.png';
import Tcheren from '../../assets/characters/character_9__Tcheren.png';
import Carolina from '../../assets/characters/character_10__Carolina.png';
import Amana from '../../assets/characters/character_11__Amana.png';
import Watson from '../../assets/characters/character_12__Watson.png';
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
      case 'Percila':
        return <img className="Presentation" id="1" src={Percila} alt="Percila" />;
      case 'Kunz':
        return <img className="Presentation" id="2" src={Kunz} alt="Kunz" />;
      case 'Iris':
        return <img className="Presentation" id="3" src={Iris} alt="Iris" />;
      case 'Matis':
        return <img className="Presentation" id="4" src={Matis} alt="Matis" />;
      case 'Bardane':
        return <img className="Presentation" id="5" src={Bardane} alt="Bardane" />;
      case 'Inezia':
        return <img className="Presentation" id="6" src={Inezia} alt="Inezia" />;
      case 'Artie':
        return <img className="Presentation" id="7" src={Artie} alt="Artie" />;
      case 'Strykna':
        return <img className="Presentation" id="8" src={Strykna} alt="Strykna" />;
      case 'Tcheren':
        return <img className="Presentation" id="9" src={Tcheren} alt="Tcheren" />;
      case 'Carolina':
        return <img className="Presentation" id="10" src={Carolina} alt="Carolina" />;
      case 'Amana':
        return <img className="Presentation" id="11" src={Amana} alt="Amana" />;
      case 'Watson':
        return <img className="Presentation" id="12" src={Watson} alt="Watson" />;
      default:
        return <img className="Presentation" id="4" src={Matis} alt="Matis" />;
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
      const template = (profil, index) => (
        <div>
          <div>
            <p>
              <span className="Yellow">
                {`Player ${index + 1}`}
,
                {' '}
you're now loged in as
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

      userProfils.map((profil, index) => out.push(template(profil, index)));
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
