import React from "react";
import CanvasConstellation from './canvas';
import startCanvas from "./canvas";

import particleCanvas from 'canvas-particle-network'

class HomeSection extends React.Component {

  
  componentDidMount(){
    CanvasConstellation(document.getElementById('hero-canvas'));
    // startCanvas();
  }

  render() {
    return (
      <div id="hero">
        <canvas id="hero-canvas" data-paper-resize="true"></canvas>

        <div id='hello'>
            <h1>I'm Kyle Belfort</h1>
            <h3>Beautifully crafting web and mobile experiences</h3>
        </div>
    </div>
    );
  }
}

export default HomeSection;
