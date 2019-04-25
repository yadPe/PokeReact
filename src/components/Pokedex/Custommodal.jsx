import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.pokemon = [];
  }

  getLocalStorage = () => {
    this.userName = localStorage.getItem('userActive');
    this.pokemon = JSON.parse(localStorage.getItem(this.userName)).pokemon;
  }

  render() {
    const { show } = this.props;
    this.getLocalStorage();
    // Render nothing if the "show" prop is false
    if (!show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
    };

    const { children } = this.props;
    const { onClose } = this.props;

    return (
      <div className="backdrop" style={{ backdropStyle }}>
        <div className="modal" style={{ modalStyle }}>
          {children}

          <div className="footer">
            <button onClick={onClose} type="button">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  show: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

export default Modal;
