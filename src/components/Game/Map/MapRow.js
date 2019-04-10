import React, { Component } from 'react';
import MapTile from './MapTile';

class MapRow extends Component {
    theme = {

      height: '32px',
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
      return (
        <div className={`row${this.props.index}`} style={this.theme}>
          {this.props.data.map((tile, index) => (
            <MapTile data={tile} key={index} index={index} />
          ))}
          
        </div>
      );
    }
}

export default MapRow;
