import React from 'react';
import Modal from 'react-modal';
import './Capture.css';

export default class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  /* localStorage.setItem('blablabla', 'blabla');
  this.state = {
    this.userNome = localStorage.getItem('username')
  }
  {this.userNome} */

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <button className="btnEasterEgg" onClick={this.openModal} type="button" />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel=""
        >
          <h1>
            Hello
            {' '}
            {this.userName}
            !
            Bravo ! Tu as capturé
            {' '}
            {' '}
          </h1>
        </Modal>
      </div>
    );
  }
}
