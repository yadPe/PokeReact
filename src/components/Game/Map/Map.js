import React, { Component } from 'react';
import MapRow from './MapRow';
import Character from './Character';

class Map extends Component {
  theme = {
    width: '416px',
    height: '416px',
    overflow: 'hidden',
    border: '4px solid black',
    margin: '0 auto',
    textAlign: 'center',
  }

  constructor(props) {
    super(props);

    this.state = {
      map: [],
    };
  }


  componentDidMount() {
    this.makeMap();
  }


    makeMap = () => {
      const makeArrays = [];
      for (let i = 0; i < 13; i += 1) {
        makeArrays.push(new Array(13).fill(0));
        for (let h = 0; h < 13; h += 1) {
          makeArrays[i][h] = (Math.floor(Math.random() * 100));
        }
      }
      this.setState({

        map: [...makeArrays],

      });
    }


    render() {
      return (
        <div style={this.theme}>
          {this.state.map.map((row, index) => (
            <MapRow data={row} index={index} key={index} />            
          ))}
          <Character />
          
        </div>
      );
    }
}

export default Map;
