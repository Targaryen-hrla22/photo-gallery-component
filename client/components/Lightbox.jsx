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
        <button onClick={props.toggleLightbox}>X</button>
      </Background>
    )
  }
}


export default Lightbox;