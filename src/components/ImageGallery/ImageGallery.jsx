import { Component } from 'react';

import pixabayApi from '../services/pixabay-api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PhotoLoader from '../Loader/Loader';
import Button from '../Button/Button';
import { ImageGalleryList, Rejected } from './ImageGallerystyled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default class ImageGallery extends Component {
  state = {
    photo: [],
    error: null,
    page: 1,
    status: Status.IDLE,
    imgLarge: this.props.imgLarge,
  };
  async componentDidUpdate(prevProps) {
    const nextQuery = this.props.photoQuery;
    const prevQuery = prevProps.photoQuery;
    if (prevQuery !== nextQuery) {
      await this.setState({ page: 1, photo: [] });
      this.setState({ status: Status.PENDING });
      this.fetchPixabayPhoto(nextQuery);
    }
  }
  fetchPixabayPhoto = () => {
    pixabayApi
      .fetchPixabay(this.props.photoQuery, this.state.page)

      .then(({ hits }) => {
        if (hits.length === 0) {
          return this.setState({ status: Status.REJECTED });
        }
        this.setState(prevState => ({
          photo: [...prevState.photo, ...hits],
          status: Status.RESOLVED,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  scroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };
  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  handelPhotoClick = (url, alt) => {
    this.setState({ imgLarge: { url, alt } });
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const status = this.state.status;

    if (status === 'idle') {
      return <div>search</div>;
    }
    if (status === 'pending') {
      return <PhotoLoader />;
    }
    if (status === 'rejected') {
      return <Rejected>Oops! Nothing found</Rejected>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ImageGalleryList>
            {this.state.photo.map(
              ({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  alt={tags}
                  url={largeImageURL}
                  onOpen={this.handelPhotoClick}
                ></ImageGalleryItem>
              ),
            )}
          </ImageGalleryList>

          {this.state.photo.length >= 12 && (
            <Button
              onClick={e => {
                this.fetchPixabayPhoto();
                this.incrementPage();
                this.scroll();
              }}
            ></Button>
          )}
        </div>
      );
    }
  }
}
