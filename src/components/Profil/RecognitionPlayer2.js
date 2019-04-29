/* eslint-disable react/no-unescaped-entities */
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
    if (localStorage.getItem('userActive0') === name) {
      history.push({
        pathname: '/anotherName',
      });
    } else if (localStorage.getItem(name)) {
      localStorage.setItem('userActive1', name);
      history.push({
        pathname: '/playvs',
      });
    }
    else {
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
      <div className="Flex">
        <p>
          Hi Player 2 !
          <br />
          What's your trainer name ?
        </p>
        <input className="Input" id="name" type="text" placeholder="Your name" onChange={this.handleChange} />
        <button className="Button" id="submitBtn" type="button" onClick={this.handleSubmit}>Go !</button>
      </div>
    );
  }
}
export default withRouter(Recognition);
