import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0,0.8);
`;

const Topbar = styled.div`
  height: 5vh;
  padding: 30px;
  text-align: right;
  font-size: 5em;
  color: white;
  `;

const CenterContainer = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  display: flex;
  height: 65vh;
  flex: 1;
  font-size: 5em;
  color: white;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const PhotoView = styled.div`
  /* background-color: purple; */
  height: 65vh;
  flex: 8;
  text-align: center;
`;

const GalleryContainer = styled.div`
  height: 20vh;
`;

const Gallery = styled.div`
  width: 60%;
  height: 80%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const Persisitant = styled.div`
  color: white;
  font-family: 'Raleway', sans-serif;
  display: flex;
  padding: 10px;
`;

const Description = styled.div`
  flex: 2;
`;

const ToggleGallery = styled.div`
  text-align: right;
  flex: 1;
`;

const ToggleGalleryButton = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const Photos = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Photo = styled.img`
  height: 100px;
  width: 200px;
  object-fit: cover;
`;

const MainImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhotoIndex: 0,
      photos: this.props.photos,
      galleryVisable: false
    }
  }

  componentDidMount() {
    console.log('Current State:', this.state);
  }

  nextPhoto() {
    if (this.state.currentPhotoIndex === this.state.photos.length - 1) {
      this.setState({
        currentPhotoIndex: 0
      })
    } else {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex + 1
      })
    }
  }

  previousPhoto() {
    if (this.state.currentPhotoIndex === 0) {
      this.setState({
        currentPhotoIndex: this.state.photos.length - 1
      })
    } else {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex - 1
      })
    }
  }

  updateCurrentPhotoIndex(index) {
    this.setState({
      currentPhotoIndex: index
    })
  }

  toggleGallery() {
    this.setState({
      galleryVisable: !this.state.galleryVisable
    })
  }

  renderGallery(tag) {
    if (this.state.galleryVisable && tag === 'photos') {
      return (
        <Photos>
          {this.state.photos.map((photo, index) =>
            <Photo key={index} src={photo.url} onClick={(e) => this.updateCurrentPhotoIndex(index)} ></Photo>
          )}
        </Photos>
      )
    } else if (tag === 'toggle') {
      if (this.state.galleryVisable) {
        return (
          <ToggleGalleryButton onClick={this.toggleGallery.bind(this)} >
            Hide List<i class="fas fa-caret-down"></i>
          </ToggleGalleryButton>
        )
      } else {
        return (
          <ToggleGalleryButton onClick={this.toggleGallery.bind(this)} >
            Show List<i class="fas fa-caret-up"></i>
          </ToggleGalleryButton>
        )
      }
    }
  }

  render() {
    return (
      <Background>
        <Topbar>
          <i class="fas fa-times" onClick={this.props.toggleLightbox}></i>
        </Topbar>
        <CenterContainer>
          <Arrow id="left-arrow">
            <i class="fas fa-chevron-left" onClick={this.previousPhoto.bind(this)} ></i>
          </Arrow>
          <PhotoView id="current-photo">
            <MainImg src={this.state.photos[this.state.currentPhotoIndex].url} />
          </PhotoView>
          <Arrow id="right-arrow">
            <i class="fas fa-chevron-right" onClick={this.nextPhoto.bind(this)} ></i>
          </Arrow>
        </CenterContainer>
        <GalleryContainer>
          <Gallery>
            <Persisitant>
              <Description>
                <span>{this.state.currentPhotoIndex}/{this.state.photos.length}: </span>
                <span>{this.state.photos[this.state.currentPhotoIndex].description}</span>
              </Description>
              <ToggleGallery>
                {this.renderGallery('toggle')}
              </ToggleGallery>
            </Persisitant>
            {this.renderGallery('photos')}
          </Gallery>
        </GalleryContainer>
      </Background>
    )
  }
}


export default Lightbox;