import React from "react";
import CanvasConstellation from './canvas';
import startCanvas from "./canvas";

class HomeSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    CanvasConstellation(document.getElementById('hero-canvas'));
  }

  render() {
    return (
      <div id="hero">
        <canvas id="hero-canvas"></canvas>

        <div id='hello'>
            <h1>I'm Kyle Belfort</h1>
            <h3>Beautifully crafting web and mobile experiences</h3>
        </div>
    </div>
    );
  }
}

export default HomeSection;
