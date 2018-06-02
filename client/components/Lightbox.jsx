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
  height: 7%;
  background-color: tomato;
  margin: 10px;
  `;

const CenterContainer = styled.div`
  height: 70%;
  background-color: tomato;
  margin: 10px;
`;

const Arrow = styled.div`
  height: 100%;
  width: 5%;
  background-color: peachpuff;
  display: inline-block;
`;

const PhotoView = styled.div`
  height: 100%;
  width: 90%;
  background-color: purple;
  display: inline-block;
`;

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: {}
    }
  }

  render() {
    return (
      <Background>
        <Topbar>
          <button onClick={this.toggleLightbox}>X</button>
        </Topbar>
        <CenterContainer>
          <Arrow id="left-arrow">

          </Arrow>
          <PhotoView id="current-photo">

          </PhotoView>
          <Arrow id="right-arrow">

          </Arrow>
        </CenterContainer>
        <div id="gallery">

        </div>
      </Background>
    )
  }
}


export default Lightbox;