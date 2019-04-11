import React, { Component } from 'react';
import MapTile from './MapTile';

class MapRow extends Component {
    theme = {

      height: '64px',
      margin: 0,
      padding: 0,
    }

    constructor(props) {
      super(props);
      this.state = {
        row: [],
      };
    }


    render() {
      const { data, index } = this.props;
      return (
        <div className={`row row-${index}`} style={this.theme}>
          {data.map((tile, i) => (
            <MapTile data={tile} key={`tile-${i}`} index={i} />
          ))}
          
        </div>
      );
    }
}

export default MapRow;
