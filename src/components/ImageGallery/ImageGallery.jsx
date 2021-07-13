import { Component } from 'react';
// import { Children } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import pixabayApi from '../services/pixabay-api';
import { ImageGalleryList } from './ImageGallerystyled';
import PhotoLoader from '../Loader/Loader';
import Modal from '../Modal/Modal';
// import { Component } from 'react';

// function ImageGallery() {
//   return <ul className="ImageGallery">{this.props.photoInfo}</ul>;
// }
// export default ImageGallery;
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default class ImageGallery extends Component {
  state = {
    photo: null,
    error: null,
    page: 1,
    status: Status.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.photoInfo !== this.props.photoInfo) {
      //   console.log('prevProps.photoInfo:', prevProps.photoInfo);
      //   console.log('this.props.photoInfo:', this.props.photoInfo);
      //   console.log('this');
      this.setState({ status: Status.PENDING });
      setTimeout(() => {
        pixabayApi
          .fetchPixabay(this.props.photoInfo, this.state.page)
          // const BASE_URL = 'https://pixabay.com/api/';
          // const API_KEY = '21764210-8d882ab68fe5176a0369b7247';
          // fetch(
          //   `https:${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.props.photoInfo}&page=${this.state.page}&per_page=12&key=${API_KEY}`,
          // )
          //   .then(response => {
          //     if (response.ok) {
          //       console.log(response.data.hits);
          //     }

          //     return Promise.reject(new Error(`Not search ${this.props.photoInfo}`));
          //   })
          //   fetch(
          //     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.photoInfo}&page=1&per_page=12&key=21764210-8d882ab68fe5176a0369b7247`,
          //   )
          //     .then(response => {
          //       if (response.ok) {
          //         return response.json();
          //       }
          //       return Promise.reject(new Error(`Нет `));
          //     })
          //   .then(r => r.hits())
          .then(photo => {
            this.setState({
              photo,
              status: Status.RESOLVED,
            });

            //   this.setState({ photo, status: Status.RESOLVED });
          })
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 5000);
    }
  }
  //   });

  //   .then(console.log(this.state.photo[0]));

  render() {
    if (this.state.status === 'idle') {
      return <div>search</div>;
    }
    if (this.state.status === 'pending') {
      return <PhotoLoader photoInfo={this.props.photoInfo}></PhotoLoader>;
    }
    if (this.state.status === 'rejected') {
      return <div>rejected</div>;
    }
    if (this.state.status === 'resolved') {
      return (
        <div>
          <ImageGalleryList>
            {this.state.photo.hits.map(hit => (
              <ImageGalleryItem
                key={hit.id}
                src={hit.webformatURL}
                alt={hit.tags}
              ></ImageGalleryItem>
            ))}
          </ImageGalleryList>
          <Modal></Modal>

          <button
            onClick={e => {
              e.preventDefault();
              // console.log(
              //   this.setState(this.prevState => ({ page: prevState.page + 1 })),
              // );
            }}
            type="button"
          >
            Load more
          </button>
        </div>
      );
    }

    // return (
    //   <ul>
    //     {/* {this.state.error && <h3>error</h3>} */}
    //     {this.state.photo && <ImageGalleryItem />}
    //     {!this.state.photo && <h2>Search photo</h2>}
    //   </ul>
    // );
  }
}
