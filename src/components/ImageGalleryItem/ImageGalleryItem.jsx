import { Component } from 'react';

import {
  ImageGalleryItemEl,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, url, onOpen } = this.props;
    return (
      <ImageGalleryItemEl>
        <ImageGalleryItemImage
          src={src}
          alt={alt}
          url={url}
          onClick={() => onOpen(url, alt)}
        />
      </ImageGalleryItemEl>
    );
  }
}
