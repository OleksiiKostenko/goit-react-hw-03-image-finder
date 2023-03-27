import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { getImages } from '../services/getImage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'
import {Loader} from './Loader/Loader'



 
export class App extends Component {
  state = {
    query: '',
    images: null,
    isLoading:false,
  };

  handleSearch = searchQuery => {
    this.setState({query:searchQuery});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query)
      this.setState({ isLoading:true})
      getImages(this.state.query)
      .then(response => response.json())
      .then((images) => this.setState({ images: images.hits }))
      .finally(()=>{this.setState({ isLoading:false})})
  };

  render() {
    const {images,isLoading}  = this.state
    return (
      <>
        <Searchbar onHandleSearch={this.handleSearch} />
        {isLoading && <Loader/>}
        <ImageGallery><ImageGalleryItem images={images} /></ImageGallery>
      </>
    );
  }
}
