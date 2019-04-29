import React from 'react';
import './Numinput.css';

class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { id } = this.state;
    this.props.displayPokemon(id);
    //this.props.function(this.state.pokemonid);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ id: e.target.value });
  }

  render() {
    const { no } = this.props;
    return (
      <div>
        <input
          type="number"
          className="screen num-input"
          placeholder={no}
          onChange={this.handleChange}
        />
        <div className="submit" onClick={this.handleClick} />
      </div>
    );
  }
}

export default NumInput;