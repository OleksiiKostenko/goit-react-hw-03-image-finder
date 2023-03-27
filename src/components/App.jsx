import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { getImages } from '../services/getImage';

export class App extends Component {
  state = {
    query: '',
  };

  handleSearch = searchQuery => {
    this.setState({ query: searchQuery });
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log('this.props', this.props);
    if (prevProps.query !== this.props.query) {
      getImages();
    }
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
      </>
    );
  }
}
