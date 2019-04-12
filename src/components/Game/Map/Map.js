import React, { Component } from 'react';
import MapRow from './MapRow';
import Character from './Character';

const reqMaps = require.context('../../../assets/maps', true, /\.txt$/);

class Map extends Component {
  theme = {
    width: '832px',
    height: '832px',
    overflow: 'hidden',
    border: '4px solid black',
    margin: '0 auto',
    textAlign: 'center',
  }

  constructor(props) {
    super(props);

    this.state = {
      map: [],
      mapView: [],
    };
  }


  componentWillMount() {
    this.loadMap(reqMaps('./001.txt', true));
  }

  loadMap = async (mapUri) => {
    await fetch(mapUri).then(res => res.json()).then(
      resJson => this.setState({ map: [...resJson] }),
    );
    this.makeMap(this.state.map, 11, 18, 13, 13);
  };

  makeMap = (matrix, offsetX, offsetY, width, height) => {
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
