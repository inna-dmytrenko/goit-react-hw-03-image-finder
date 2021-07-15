import { Component } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';
export default class Modal extends Component {
  render() {
    return (
      <Overlay className="Overlay">
        <ModalDiv className="Modal">
          <img src="https://www.pexels.com/ru-ru/photo/7618941/" alt="1" />
        </ModalDiv>
      </Overlay>
    );
  }
}
