import React, { Component } from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';


class Recognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleSubmit = () => {
    const {
      sendInput, history,
    } = this.props;
    const { name } = this.state;
    if (localStorage.getItem(name)) {
      localStorage.setItem('userActive', name);
      history.push({
        pathname: '/play',
        state: { user: name },
      });
    } else {
      const input = {};
      input.type = 'testSubmit';
      input.value = name;
      sendInput(input);
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className="Background">
        <h1>
          We would not have seen each other somewhere ?
        </h1>
        <h2>
          Tell me your beautiful name !
        </h2>
        <div className="ButtonCenter">
          <input className="Input" id="name" type="text" onChange={this.handleChange} />
          <button id="submitBtn" type="button" className="Button" onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    );
  }
}


export default withRouter(Recognition);
