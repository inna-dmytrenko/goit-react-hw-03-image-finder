import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import { AppStyled } from './App.styled';
export default class App extends Component {
  state = {
    photoName: '',
    showModal: false,
    imgLarge: { url: '', alt: '' },
  };
  handelFormSubmit = photoName => {
    this.setState({ photoName: photoName });
    console.log(photoName);
  };
  render() {
    const { url, alt } = this.state.imgLarge;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGallery
          imgLarge={this.state.imgLarge}
          photoQuery={this.state.photoName}
        />
        <ToastContainer />
        {this.state.showModal && (
          <Modal
            onClose={() => {
              this.setState(({ showModal }) => ({ showModal: !showModal }));
            }}
          >
            <img src={url} alt={alt} />
          </Modal>
        )}
      </AppStyled>
    );
  }
}
