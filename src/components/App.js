import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import { AppStyled } from './App.styled';
export default class App extends Component {
  state = {
    photoName: '',
  };
  handelFormSubmit = photoName => {
    this.setState({ photoName: photoName });
    console.log(photoName);
  };
  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGallery photoQuery={this.state.photoName} />
        <ToastContainer />
      </AppStyled>
    );
  }
}
