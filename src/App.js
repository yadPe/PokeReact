import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Game from './components/Game/Game';
import Commands from './components/Commands/Commands';
import Pokedex from './components/Pokedex/Pokedex';
import './App.css';
import CreationProfile from './components/Profil/CreationProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/play" component={Game} />
              <Route
                path='/playvs'
                render={(props) => <Game {...props} players={2}/>}
              />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/commands" component={Commands} />
              <Route path="/creation" component={CreationProfile} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
