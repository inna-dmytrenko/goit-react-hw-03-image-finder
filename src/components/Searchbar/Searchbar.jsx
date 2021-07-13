import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarDiv,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export default class Searchbar extends Component {
  state = {
    photoName: '',
  };
  handleNameChange = e => {
    this.setState({ photoName: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.photoName.trim() === '') {
      return toast.warning('Please enter something!');
    }
    this.props.onSubmit(this.state.photoName);
    this.setState({ photoName: '' });
  };
  render() {
    return (
      <SearchbarDiv>
        <SearchForm className="SearchForm" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="SearchForm-button">
            <SearchFormButtonLabel className="SearchForm-button-label">
              Search
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.photoName}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchbarDiv>
    );
  }
}
