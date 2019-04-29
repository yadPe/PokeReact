/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../../App.css';


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
    const profil = localStorage.getItem('userActive0');
    return (
      <div className="Flex">
        <p>
          <span className="Yellow">Player 1:</span>
          <br />
          {' '}
          {profil}
        </p>
        <div className="changeProfil">
          <NavLink to="./creation" className="Yellow">
            {' '}
            Use another profil.
          </NavLink>
        </div>
        <p>
          <br />
          <span className="Yellow">Player 2:</span>
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
