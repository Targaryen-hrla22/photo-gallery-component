import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Lightbox from './Lightbox.jsx';

const MainPhotoContainer = styled.div`
  width: 100%;
  height: 750px;
  overflow: hidden;
`;

const MainPhoto = styled.img`
  margin-top: 80px;
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      mainPhoto: {},
      photos: [],
      currentListing: 1,
      lightbox: false
    }
  }

  getPhotos(id) {
    axios({
      method: 'GET',
      url: 'http://ec2-34-239-126-92.compute-1.amazonaws.com/api/photos',
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

  lightboxOrNah() {
    this.setState({
      lightbox: !this.state.lightbox
    })
  }

  renderLightBox() {
    console.log('Lightbox is:', this.state.lightbox);
    if (this.state.lightbox) {
      return (
        <Lightbox toggleLightbox={this.lightboxOrNah.bind(this)} photos={this.state.photos} />
      )
    } else {
      console.log('Lighthouse should not render, it is set to false');
    }
  }

  componentDidMount() {
    this.getPhotos(this.state.currentListing);
  }

  render() {
    return (
      <div>
        <MainPhotoContainer>
          <MainPhoto src={this.state.mainPhoto.url} onClick={this.lightboxOrNah.bind(this)}></MainPhoto>
        </MainPhotoContainer>
        {this.renderLightBox()}
      </div>
    )
  }
}

export default App;