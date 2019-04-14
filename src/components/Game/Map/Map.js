import React, { Component } from 'react';
import MapRow from './MapRow';

const reqMaps = require.context('../../../assets/maps', true, /\.txt$/);
const reqTiles = require.context('../../../assets/tiles', true, /\.png$/);

class Map extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      map: [],
      view: [],
      viewX: 11,
      viewY: 17,
    };

    this.keys = {
      keyUp: 38,
      keyDown: 40,
      keyLeft: 37,
      keyRight: 39,
    };

    this.theme = {
      width: '832px',
      height: '832px',
      overflow: 'hidden',
      border: '4px solid black',
      margin: '0 auto',
      textAlign: 'center',
    };

    this.renderCounter = 0;
    this.loopCounter = 0;
    this.loaded = false;
    this.asyncKeys = [];
  }

  componentWillMount() {
    this.init();
  }

  componentWillUnmount() {
    this.end();
  }

  init = async () => {
    await this.loadMap(reqMaps('./001.txt', true));
    await this.loadTiles(reqTiles.keys());
    for (let i = 0; i < Object.keys(this.keys).length; i += 1) {
      this.asyncKeys.push(false);
    }
    document.body.addEventListener('keydown', this.keyPressed);
    document.body.addEventListener('keyup', this.keyReleased);
    this.running = setInterval(this.run, 1000 / 30);
  }

  end = () => {
    document.body.removeEventListener('keydown', this.keyPressed);
    document.body.removeEventListener('keyup', this.keyReleased);
    clearInterval(this.running);
    this.asyncKeys = null;
    this.running = null;
    this.renderCounter = null;
    this.loaded = null;
  }

  run = () => {
    this.loopCounter++
    const { map } = this.state;
    let { viewY, viewX } = this.state;
    const step = 1;
    let change;
    for (let i = 0; i < Object.keys(this.keys).length; i += 1) {
      for (let j = 0; j < this.asyncKeys.length; j += 1) {
        if (Object.values(this.keys)[i] === this.asyncKeys[j]) {
          change = true;
          if (this.asyncKeys[j] === 38){
            viewY -= step; 
            break
          }
          if (this.asyncKeys[j] === 40){
            viewY += step; 
            break
          }
          if (this.asyncKeys[j] === 37){
            viewX -= step; 
            break
          }
          if (this.asyncKeys[j] === 39){
            viewX += step; 
            break
          }
        }
      }
    }
    if (!change) return
    this.setState({
      viewY,
      viewX,
    },
      () => this.updateViewMap(map, viewX, viewY, 13, 13));
  }

  keyPressed = (e) => {
    const keys = e.keyCode;
    const size = Object.keys(this.keys).length;

    for (let i = 0; i < size; i += 1) {
      if (Object.values(this.keys)[i] === keys && !this.asyncKeys[i]) {
        this.asyncKeys[i] = keys;
        this.run()
        break;
      }
    }
  }

  keyReleased = (e) => {
    const keys = e.keyCode;
    const size = Object.keys(this.keys).length;

    for (let i = 0; i < size; i += 1) {
      if (Object.values(this.keys)[i] === keys && this.asyncKeys[i]) {
        this.asyncKeys[i] = false;
        break;
      }
    }
  }

  loadMap = async (mapUri) => {
    await fetch(mapUri).then(res => res.json()).then(resJson => this.setState({
      map: [...resJson],
    }));
    this.loaded = true;
    const { viewY, viewX, map } = this.state;
    this.updateViewMap(map, viewX, viewY, 13, 13);
  };

  loadTiles = (tilesKeys) => {
    const tiles = tilesKeys.sort((a, b) => {
      return a.split('-')[0].substring(2, a.split('-')[0].lenght) - b.split('-')[0].substring(2, b.split('-')[0].lenght);
    })
    const style = document.createElement("style");
    style.type = 'text/css';
    let css = ''
    for (let i = 0; i< tiles.length; i += 1){
      css += `.tile-${i} {background-image: url(${reqTiles(tiles[i], true)})}\n`
    }
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  updateViewMap = (matrix, offsetX, offsetY, width, height) => {
    if (offsetX + width > matrix[0].length) return;
    if (offsetY + height > matrix.length) return;
    const subMatrix = [];
    for (let i = offsetY; i < height + offsetY; i += 1) {
      const index = subMatrix.push(matrix[i]) - 1;
      subMatrix[index] = subMatrix[index].slice(offsetX, offsetX + width);
    }
    this.setState({ view: [...subMatrix] });
  }

  render() {
    const { view } = this.state;
    this.renderCounter++
    return (
      <div style={this.theme}>
        <h3 style={{ position: 'fixed', bottom: 10, right: 10 }}>{`Render No ${this.renderCounter} Loop No ${this.loopCounter}`}</h3>
        {this.loaded ? view.map((row, i) => (
          <MapRow data={row} index={i} key={`row-${i + 1}`} />
        )) : <h1 style={{ margin: '50% auto' }}>LOADING..</h1>}
      </div>
    );
  }
}

export default Map;
