import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Game from './components/Game/Game';
import Commands from './components/Commands/Commands';
import Pokedex from './components/Pokedex/Pokedex';
import Recognition from './components/Profil/Recognition';
import CreationProfile from './components/Profil/CreationProfile';
import Profile from './components/Profil/Profile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/recognition" component={Recognition} />
              <Route path="/play" component={Game} />
              <Route path="/playvs" render={props => <Game {...props} players={2} />} />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/commands" component={Commands} />
              <Route path="/creation" component={CreationProfile} />
              <Route path="/profil" component={Profile} />

            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
