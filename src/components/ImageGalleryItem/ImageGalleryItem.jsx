import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemEl,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <ImageGalleryItemEl>
        <ImageGalleryItemImage
          src={this.props.src}
          alt={this.props.alt}
          url={this.props.url}
          onClick={() => this.props.onOpen(this.props.url, this.props.alt)}
        />
      </ImageGalleryItemEl>
    );
  }
}
ImageGalleryItem.propTyes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
