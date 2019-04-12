import React, { Component } from 'react';
import MapRow from './MapRow';


const reqMaps = require.context('../../../assets/maps', true, /\.txt$/);

class Map extends Component {
  asyncKeys = [];

  constructor(props) {
    super(props);

    this.state = {
      map: [],
      mapView: [],
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
    this.loaded = false;
  }

  componentWillMount() {
    this.init();
  }

  componentWillUnmount() {
    this.end();
  }

  init = () => {
    this.loadMap(reqMaps('./001.txt', true));
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
    this.asyncKeys = null;
    clearInterval(this.running);
    this.running = null;
  }

  run = () => {
    const { map } = this.state;
    let { viewY, viewX } = this.state;
    const step = 1;
    let change;
    for (let i = 0; i < Object.keys(this.keys).length; i += 1) {
      for (let j = 0; j < this.asyncKeys.length; j += 1) {
        if (Object.values(this.keys)[i] === this.asyncKeys[j]) {
          change = true;
          if (this.asyncKeys[j] === 38) {
            viewY -= step;
          }
          if (this.asyncKeys[j] === 40) {
            viewY += step;
          }
          if (this.asyncKeys[j] === 37) {
            viewX -= step;
          }
          if (this.asyncKeys[j] === 39) {
            viewX += step;
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

  updateViewMap = (matrix, offsetX, offsetY, width, height) => {
    if (offsetX + width > matrix[0].length) return;
    if (offsetY + height > matrix.length) return;
    const subMatrix = [];
    for (let i = offsetY; i < height + offsetY; i += 1) {
      const index = subMatrix.push(matrix[i]) - 1;
      subMatrix[index] = subMatrix[index].slice(offsetX, offsetX + width);
    }
    this.setState({ mapView: [...subMatrix] });
  }

  render() {
    const { mapView } = this.state;
    this.renderCounter++
    return (
      <div style={this.theme}>
        <h3 style={{position: 'fixed', bottom: 10, right: 10}}>{`Render No ${this.renderCounter}`}</h3>
        {this.loaded ? mapView.map((row, i) => (
          <MapRow data={row} index={i} key={`row-${i + 1}`} />
        )): <h1 style={{margin: '50% auto'}}>LOADING..</h1>}
      </div>
    );
  }
}

export default Map;
