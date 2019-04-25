import React, { Component } from 'react';

class WinnerModal extends Component {
  constructor(props) {
    super(props);
    this.style = {
      width: '300px',
      height: '300px',
      margin: '10px auto',
    };
  }

  render() {
    return (
      <div style={{
        paddingLeft: '15px',
        zIndex: '200',
        width: '300px',
        height: '300px',
        margin: '10 px auto',
        display: 'block',
        position: 'absolute',
        left: '33%',
        top: '30%',
        backgroundColor: 'blue',
        color: 'black',
      }}
      >
        <h1>Winner !</h1>
        <button style={{ width: '200px', height: '100px ' }} type="button">PokeDex</button>
      </div>
    );
  }
}

export default WinnerModal;
