/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import MapRow from './MapRow';
import Player from './Tiles/Character';
import { ableToMove } from '../utils';
import Capture from '../../Pokedex/Capture';
import { Pokemon } from '../character';

const reqMaps = require.context('../../../assets/maps', true, /\.txt$/);

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: [],
      view: [],
      viewWidth: 13,
      viewHeight: 13,
      viewX: 11,
      viewY: 17,
      characterDirection: 'CharacterDown0',
      pokemons: [],
      visiblePokemons: [],
    };

    this.theme = {
      width: '832px',
      height: '832px',
      overflow: 'hidden',
      margin: '0 auto',
      textAlign: 'center',
    };

    this.loaded = false;
    this.asyncKeys = [];
    this.debugMode = true;
    this.gamepads = [];
    this.scrollSpeed = 8;
    this.lastScroll = 0;
    if (this.debugMode) {
      this.renderCounter = 0;
      this.loopCounter = 0;
    }
  }

  componentWillMount() {
    this.init();
  }

  componentWillUnmount() {
    this.end();
  }

  init = async () => {
    this.configInstance();
    await this.loadMap(reqMaps('./map1.txt', true));
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then(res => res.json()).then(resJson => this.pokeBase = resJson.results);
    this.gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    this.running = setInterval(this.run, 1000 / 30);
  }

  end = () => {
    clearInterval(this.running);
    this.asyncKeys = null;
    this.running = null;
    this.renderCounter = null;
    this.loaded = null;
  }

  configInstance = () => {
    this.config = {};
    const { controller } = this.props;
    this.gamepad = controller;
    if (controller === 0)
      {this.config.host = true;}
  }

  loadMap = async (mapUri) => {
    await fetch(mapUri).then(res => res.json()).then(resJson => this.setState({
      map: [...resJson],
    }));
    this.loaded = true;

    // Will move //


    const {
      viewY, viewX, viewWidth, viewHeight, map,
    } = this.state;

    this.updateViewMap(map, viewX, viewY, viewWidth, viewHeight);
  };

  checkGamepad = (gamepadId) => {
    this.gamepads = navigator.getGamepads ? navigator.getGamepads()
      : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!this.gamepads[gamepadId]) {
      return;
    }
    const step = 1;

    const gp = this.gamepads[gamepadId];
    if (gp.buttons[12].pressed) {
      this.moveTo('up', step);
    } else if (gp.buttons[13].pressed) {
      this.moveTo('down', step);
    } else if (gp.buttons[14].pressed) {
      this.moveTo('left', step);
    } else if (gp.buttons[15].pressed) {
      this.moveTo('right', step);
    } else if (gp.axes[0] === 1) {
      this.moveTo('right', step);
    } else if (gp.axes[0] === -1) {
      this.moveTo('left', step);
    } else if (gp.axes[1] === 1) {
      this.moveTo('down', step);
    } else if (gp.axes[1] === -1) {
      this.moveTo('up', step);
    }
  }

  checkKeyboard = () => {
    let step = 1;
    const { controls, asyncKeys } = this.props;
    for (let i = 0; i < controls.length; i += 1) {
      if (controls[i] === asyncKeys[i]) {
        if (asyncKeys[i] === controls[0]) {
          this.moveTo('up', step);
          break;
        }
        if (asyncKeys[i] === controls[1]) {
          this.moveTo('down', step);
          break;
        }
        if (asyncKeys[i] === controls[2]) {
          this.moveTo('left', step);
          break;
        }
        if (asyncKeys[i] === controls[3]) {
          this.moveTo('right', step);
          break;
        }
        if (this.asyncKeys[i] === null) {
          step = 0;
          this.moveTo('stay', step);
          break;
        }
      }
    }
  }

  moveTo = (direction, step) => {
    if (performance.now() - this.lastScroll < 1000 / this.scrollSpeed) return;
    const {
      map, viewWidth, viewHeight,
    } = this.state;
    let { viewY, viewX, characterDirection } = this.state;
    if (!ableToMove({ x: viewX + 6, y: viewY + 6 }, direction, step, map)) return;
    switch (direction) {
      case 'up':
        viewY -= step;
        characterDirection = 'CharacterUp1';
        break;

      case 'down':
        viewY += step;
        characterDirection = 'CharacterDown1';
        break;

      case 'left':
        viewX -= step;
        characterDirection = 'CharacterLeft1';
        break;

      case 'right':
        viewX += step;
        characterDirection = 'CharacterRight1';
        break;

      default:
        return;
    }
    this.setState({
      viewY,
      viewX,
      characterDirection,
    },
    () => {
      this.updateViewMap(map, viewX, viewY, viewWidth, viewHeight);
      this.lastScroll = performance.now();
      const { controller, reportPosition } = this.props;
      reportPosition({ player: controller, x: viewX + 6, y: viewY + 6 });
    });
  }

  updateViewMap = (matrix, offsetX, offsetY, width, height) => {
    if (offsetX + width > matrix[0].length) return;
    if (offsetY + height > matrix.length) return;
    const subMatrix = [];
    for (let i = offsetY; i < height + offsetY; i += 1) {
      const index = subMatrix.push(JSON.parse(JSON.stringify(matrix[i]))) - 1;
      subMatrix[index] = subMatrix[index].slice(offsetX, offsetX + width);
    }
    this.setState({ view: [...subMatrix] });
    // eslint-disable-next-line consistent-return
    return subMatrix;
  }

  addNewPokemon = (amount, id) => {
    const { map } = this.state;
    const { pokemons } = this.state;
    for (let i = 0; i < amount; i += 1) {
      const poke = new Pokemon(id, 'greuf', 16, 20, map);
      poke.init();
      pokemons.push(poke);
    }
    this.setState({ pokemons });
  }

  run = () => {
    if (!this.loaded) return;
    const {
      viewX, viewY, viewWidth, viewHeight, map,
    } = this.state;
    let { pokemons, visiblePokemons, view } = this.state;
    if (this.debugMode) this.loopCounter += 1;
    if (pokemons.length < 1) this.addNewPokemon(1, 9001);

    if (pokemons.length > 0 && this.loaded) {
      pokemons.map(poke => poke.run());
      visiblePokemons = pokemons.filter(poke => poke.y >= viewY && poke.y < viewY + viewHeight && poke.x >= viewX && poke.x < viewX + viewWidth);

      view = this.updateViewMap(map, viewX, viewY, viewWidth, viewHeight);

      visiblePokemons.map((poke) => {
        view[poke.y - viewY][poke.x - viewX].push(poke.id);
        if (view[Math.floor(view.length / 2)][Math.floor(view.length / 2)].includes(poke.id)) {
          this.catched = (this.pokeBase[poke.id - 8999]);
          clearInterval(this.running);
        }
      });
      this.setState({ view: [...view], visiblePokemons });
    }

    const { controller } = this.props;
    this.checkKeyboard();
    this.checkGamepad(controller);
  }

  debug = () => {
    if (!this.debugMode) return;
    this.renderCounter += 1;
    // eslint-disable-next-line consistent-return
    return (
      <h3 style={{
        position: 'fixed', bottom: 10, right: 10, zIndex: 1000,
      }}
      >
        {`Render No ${this.renderCounter} Loop No ${this.loopCounter}`}

      </h3>
    );
  }

  render() {
    const {
 view, winner, characterDirection, catched 
} = this.state;
    const { asyncKeys } = this.props;
    return (
      <div style={this.theme}>
        {this.debugMode ? this.debug() : null}
        {this.loaded ? view.map((row, i) => (
          <MapRow data={row} index={i} key={`row-${i + 1}`} />
        )) : <h1 style={{ margin: '50% auto' }}>LOADING..</h1>}
        <Player />

        {this.catched ? <Capture winner={winner} catched={this.catched} /> : null}

        <Player activeKeys={asyncKeys} direction={characterDirection} />
      </div>
    );
  }
}

export default Map;
