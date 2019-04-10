import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Page1 from "./Page1/Page1.js";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3.js";
import Page4 from "./Page4/Page4.js";
import Page5 from "./Page5/Page5.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <NavLink exact to="/" activeClassName="selected"> Page1 </NavLink>
              <NavLink to="/Pokedex" activeClassName="selected"> Pokedex </NavLink>
              <NavLink to="/Page3" activeClassName="selected"> Page3 </NavLink>
              <NavLink to="/Page4" activeClassName="selected"> Page4 </NavLink>
              <NavLink to="/Page5" activeClassName="selected"> Page5 </NavLink>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/" component={Page1} />
              <Route path="/Pokedex" component={Page2} />
              <Route path="/Page3" component={Page3} />
              <Route path="/Page4" component={Page4} />
              <Route path="/Page5" component={Page5} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
