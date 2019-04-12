import React, { Component } from 'react';
import MapRow from './MapRow';
import Character from './Character';

const reqMaps = require.context('../../../assets/maps', true, /\.txt$/);

class Map extends Component {
  asyncKeys = [];

  constructor(props) {
    super(props);

    this.state = {
      map: [],
      mapView: [],
      viewX: 18,
      viewY: 11
    };

    this.keys = {
      keyUp: 38,
      keyDown: 40,
      keyLeft: 37,
      keyRight: 39
    }

    this.theme = {
      width: '832px',
      height: '832px',
      overflow: 'hidden',
      border: '4px solid black',
      margin: '0 auto',
      textAlign: 'center',
    }
  }


  componentWillMount() {
    this.init()
  }

  componentWillUnmount() {
    this.end()
  }

  init = () => {
    this.loadMap(reqMaps('./001.txt', true));
    for (let i = 0; i < Object.keys(this.keys).length; i += 1) {
      this.asyncKeys.push(false)
    }
    document.body.addEventListener('keydown', this.keyPressed);
    document.body.addEventListener('keyup', this.keyReleased);
    this.running = setInterval(this.run, 1000 / 30)
  }

  end = () => {
    document.body.removeEventListener('keydown', this.keyPressed);
    document.body.removeEventListener('keyup', this.keyReleased);
    this.asyncKeys = null;
    clearInterval(this.running);
    this.running = null;
  }

  run = () => {
    const step = 1;
    for (let i = 0; i < Object.keys(this.keys).length; i += 1) {
      for (let j = 0; j < this.asyncKeys.length; j += 1) {
        if (Object.values(this.keys)[i] === this.asyncKeys[j]) {
          if (this.asyncKeys[j] === 38) {
            this.setState({
              viewY: this.state.viewY + -step,
            })
          }
          if (this.asyncKeys[j] === 40) {
            this.setState({
              viewY: this.state.viewY + step,
            })
          }
          if (this.asyncKeys[j] === 37) {
            this.setState({
              viewX: this.state.viewX + -step,
            })
          }
          if (this.asyncKeys[j] === 39) {
            this.setState({
              viewX: this.state.viewX + step,
            })
          }
          this.updateViewMap(this.state.map, this.state.viewX, this.state.viewY, 13, 13);
        }
      }

    }
  }

  keyPressed = (e) => {
    const keys = e.keyCode;
    const size = Object.keys(this.keys).length;

    for (let i = 0; i < size; i += 1) {
      if (Object.values(this.keys)[i] === keys && !this.asyncKeys[i]) {
        this.asyncKeys[i] = keys;
        break
      }
    }
  }

  keyReleased = (e) => {
    const keys = e.keyCode;
    const size = Object.keys(this.keys).length;

    for (let i = 0; i < size; i += 1) {
      if (Object.values(this.keys)[i] === keys && this.asyncKeys[i]) {
        this.asyncKeys[i] = false;
        break
      }
    }
  }

  loadMap = async (mapUri) => {
    await fetch(mapUri).then(res => res.json()).then(resJson => this.setState({
      map: [...resJson]
    }));
    this.updateViewMap(this.state.map, this.state.viewX, this.state.viewY, 13, 13);
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
    return (
      <div style={this.theme}>
        {mapView.map((row, i) => (
          <MapRow data={row} index={i} key={`row-${i}`} />
        ))}
      </div>
    );
  }
}

export default Map;
