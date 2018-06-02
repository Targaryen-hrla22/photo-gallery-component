import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mainPhoto: {},
      photos: [],
      currentListing: 1
    }
  }

  getPhotos(id) {
    axios({
      method: 'GET',
      url: '/api/photos',
      params: {
        listing_id: id
      }
    })
      .then((data) => {
        console.log('Got photo data from DB:',  data.data);
        this.setState({
          mainPhoto: data.data.photos[0],
          photos: data.data.photos
        }, () => {
          console.log('Listing Updated:', this.state);
        })
      })
      .catch((err) => {
        console.log('Error fetching photos from DB:', err);
      })
  }

  componentDidMount() {
    this.getPhotos(this.state.currentListing);
  }

  render() {
    return (
      <div>
        {this.state.photos.map((photo) => 
          <div>
            <img src={photo.url} />
            <p>{photo.description}</p>
          </div>
        )}
      </div>
    )
  }
}

export default App;