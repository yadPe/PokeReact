import React from 'react';
import './Capture.css';

export default class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.pokemon = [];
    this.state = {
      modalisopen: true,

    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }


  getLocalStorage = () => {
    this.setState({
      userName: localStorage.getItem('userActive'),
      pokemon: localStorage.getItem(this.userName).pokemon,
    });
  }

  openModal() {
    this.setState({ modalisopen: true });
  }

  closeModal() {
    this.setState({ modalisopen: false });
  }


  render() {
    const { modalisopen } = this.state;


    const backdropStyle = {
      position: 'fixed',
      top: 0,

      left: 0,

      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      zIndex: '200',
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
    };
    return (
      <div
        className="blblblblbl"
        onLoad={this.openModal}
        isOpen={modalisopen}
        onRequestClose={this.closeModal}
        contentLabel=""
        style={{ position: 'absolute', top: '0' }}
      >
        <div className="backdrop" style={{ backdropStyle }}>
          <div className="modal" style={{ modalStyle }}>
            <div className="footer">
              <h1>
                Hello
                {' '}
                {this.userName}
                !
                Well done! You captured
                {' '}
                {this.pokemon}
                !
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
