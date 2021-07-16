import { Component } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleOrelayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Overlay onClick={this.handleOrelayClick}>
        <ModalDiv>{this.props.children}</ModalDiv>
      </Overlay>
    );
  }
}
