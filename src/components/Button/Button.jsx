import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonClick } from './Button.styled';

export default class Button extends Component {
  render() {
    //   const { onClick } = this.props;
    return (
      <ButtonClick onClick={this.props.onClick} type="button">
        Load more
      </ButtonClick>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
