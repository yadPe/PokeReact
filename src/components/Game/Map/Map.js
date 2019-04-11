import React, { Component } from 'react';
import MapRow from './MapRow';

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
          makeArrays[i][h] = (Math.floor(Math.random() * 118));
        }
      }
      this.setState({

        map: [...makeArrays],

      });
    }


    render() {
      const { map } = this.state;
      return (
        <div style={this.theme}>
          {map.map((row, i) => (
            <MapRow data={row} index={i} key={i} />
          ))}

        </div>
      );
    }
}

export default Map;
