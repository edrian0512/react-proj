import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
import ImageList from './ImageList';

export class Gallery extends Component {

  state = { images: [] } //initialize state

  onSearchSubmit = async (term) => {
    // console.log(term)
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:
      {
        Authorization: 'Client-ID xFl39UcFA0vhj7q66gm9ZYhRg0IP7ROuARnOAarmBKY'
      },
      params: {
        query: term
      }
    })

    this.setState({ images: response.data.results })
    // console.log(this.state.images)
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
      
    )
  }
}

export default Gallery

// xFl39UcFA0vhj7q66gm9ZYhRg0IP7ROuARnOAarmBKY
// /search/photos


// https://api.unsplash.com/