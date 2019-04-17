/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';

class UserName extends Component {
	constructor(props) {
    super(props);
		this.state = {
			erreur: false
		};		
  }
 
	handleChange = (event) => {
		this.setState({
			name: event.target.value,
		})
	}

	handleSubmit = () => {
		if(parseInt(this.state.name) || this.state.name.length < 2){this.setState({erreur: this.state.name});		
		}
		else{
		const input = {}
		input.type = 'usernameSubmit'
		input.value = this.state.name
		this.props.sendInput(input)}
	}
	
	render() {
	  return (
  <div>
    <h1>It's time to create your trainer</h1>
		{this.state.erreur ? <h2>Ne me dis pas que ton nom est {this.state.erreur}</h2> : ''}
    <div>
      <input id="name" type="text" onChange={this.handleChange} />
      <button id="submitBtn" type="button" onClick={this.handleSubmit}>Créer</button>
    </div>
  </div>
	  );
	}
}


export default UserName;
