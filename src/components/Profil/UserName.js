import React, { Component } from 'react';
import '../../App.css';

class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erreur: false,
      name: '',
    };
  }

handleChange = (event) => {
  this.setState({
    name: event.target.value,
  });
}

handleSubmit = () => {
  const { sendInput } = this.props;
  const { name } = this.state;
  if (parseInt(name, 10) || name.length < 2) {
    this.setState({ erreur: name });
  } else {
    const input = {};
    input.type = 'usernameSubmit';
    input.value = name;
    sendInput(input);
  }
}

render() {
  const { erreur } = this.state;
  return (
    <div>
      <h1>It is time to create your trainer !</h1>
      {erreur ? (
        <h2>
Ne me dis pas que ton nom est
          {' '}
          {erreur}
          {' '}
???
        </h2>
      ) : ''}
      <br />
      <div className="ButtonCenter">
        <input className="Input" id="name" type="text" onChange={this.handleChange} />
        <button id="submitBtn" type="button" className="Button" onClick={this.handleSubmit}>Créer</button>
      </div>
    </div>
  );
}
}


export default UserName;
