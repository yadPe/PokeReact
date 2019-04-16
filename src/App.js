import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, NavLink, } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Game from './components/Game/Game';
import Pokedex from './components/Pokedex/Pokedex';

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
          <BrowserRouter>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/play" component={Game} />
              <Route path="/pokedex" component={Pokedex} />
            </Switch>
 
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
