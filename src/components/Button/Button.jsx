import { Component } from 'react';
import { ButtonClick } from './Button.styled';

export default class Button extends Component {
  render() {
    return (
      <ButtonClick onClick={this.props.onClick} type="button">
        Load more
      </ButtonClick>
    );
  }
}
