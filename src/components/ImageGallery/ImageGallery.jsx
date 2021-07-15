import { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import pixabayApi from '../services/pixabay-api';
import { ImageGalleryList } from './ImageGallerystyled';
import PhotoLoader from '../Loader/Loader';
import Modal from '../Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  BTN: 'btn',
};
export default class ImageGallery extends Component {
  state = {
    photo: [],
    error: null,
    page: 1,
    status: Status.IDLE,
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.status);

    const nextQuery = this.props.photoInfo;
    if (prevProps.photoInfo !== nextQuery) {
      this.setState({ page: 1, photo: [] });
      this.setState({ status: Status.PENDING });
      this.fetchPixabayPhoto(nextQuery);
      console.log(nextQuery);
    }
  }
  fetchPixabayPhoto = nextQuery => {
    console.log(nextQuery);

    pixabayApi
      .fetchPixabay(this.props.photoInfo, this.state.page)

      .then(({ hits }) => {
        // console.log(photo.total)
        console.log(this.props.photoInfo);
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
  // incrementPage();
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

  render() {
    if (this.state.status === 'idle') {
      return <div>search</div>;
    }
    if (this.state.status === 'pending') {
      return <PhotoLoader photoInfo={this.props.photoInfo}></PhotoLoader>;
    }
    if (this.state.status === 'rejected') {
      return <div>Oops! Nothing found</div>;
    }
    if (this.state.status === 'resolved') {
      return (
        <div>
          <ImageGalleryList>
            {this.state.photo.map(hit => (
              <ImageGalleryItem
                key={hit.id}
                src={hit.webformatURL}
                alt={hit.tags}
                url={hit.largeImageURL}
                onClick={e => {
                  if (e.target.nodeName === 'IMG') {
                    this.setState({ showModal: true });
                    // console.log(this.state.showModal)
                  }
                }}
              ></ImageGalleryItem>
            ))}
          </ImageGalleryList>

          {this.state.photo.length >= 12 && (
            <button
              onClick={() => {
                this.fetchPixabayPhoto();
                this.incrementPage();
                this.scroll();
              }}
              type="button"
            >
              Load more
            </button>
          )}
          {this.state.showModal && <Modal></Modal>}
        </div>
      );
    }
  }
}
