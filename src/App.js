import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import styled from '@emotion/styled/macro';
import 'react-toastify/dist/ReactToastify.css';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
const styles = {
  app: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,
  },
};

export default class App extends Component {
  state = {
    // photo: null,
    photoName: '',
  };
  handelFormSubmit = photoName => {
    this.setState({ photoName });
  };
  // componentDidMount() {
  //   fetch(
  //     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=car&page=1&per_page=12&key=21764210-8d882ab68fe5176a0369b7247`,
  //   )
  //     .then(res => res.json())
  //     .then(photo => this.setState({ photo }));
  // }
  render() {
    return (
      <div style={styles.app}>
        <Searchbar onSubmit={this.handelFormSubmit} />

        {/* <ul>
          <li>
            {this.state.photo && (
              <img src={this.state.photo.hits[2].webformatURL} />
            )}
          </li>
        </ul> */}
        <ImageGallery photoInfo={this.state.photoName} />
        <ToastContainer />
      </div>
      // <div><
      //   <div>
      //     <ul>
      //       <li>
      //         <img src={'this.state.photo.hits[4].webformatURL'}
      //         alt={'this.state.photo.hits[4].tags'}/><li/>
      //     <ul/>
      //   <div/>
    );
  }
}
