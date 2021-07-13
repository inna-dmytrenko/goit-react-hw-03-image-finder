import { Component } from 'react';
import {
  ImageGalleryItemEl,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <ImageGalleryItemEl className="ImageGalleryItem">
        <ImageGalleryItemImage
          src={this.props.src}
          alt={this.props.alt}
          className="ImageGalleryItem-image"
        />
      </ImageGalleryItemEl>
    );
  }
}
