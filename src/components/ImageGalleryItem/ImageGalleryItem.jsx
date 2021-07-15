import { Component } from 'react';

import {
  ImageGalleryItemEl,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <ImageGalleryItemEl>
        <ImageGalleryItemImage
          // onClick={this.props.onClick}
          src={this.props.src}
          alt={this.props.alt}
          url={this.props.url}
          onClick={this.props.onClick}
          // onClick={(e) => {
          //   if (e.target.nodeName === "IMG") {
          //     // this.props.src=this.props.url
          //     console.log(e.target.nodeName)
          //     console.log(this.props.src)
          //     console.log(this.props.url)
          //     // src={this.props.url}
          //   }
          // }}
        />
      </ImageGalleryItemEl>
    );
  }
}
