import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Game from './components/Game/Game';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/play" component={Game} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
