import React, { PureComponent } from 'react';
import faceAREarth from "../images/faceAREarth.png"
import faceAREarthGIF from "../images/arEarthFace.gif"
import faceEarthWaterColor from "../images/faceEarthWaterColor.png"
import faceWaterColor from "../images/faceWaterColor.png"
import "../css/AR.css";


export default class Header extends PureComponent {
  render() {
    return (
      <div class="container">
        <br />
        <h2>Augmented Reality</h2>
        <br />
        <img src={faceAREarth} alt="faceEarthWaterColor" class="img" />
        <img src={faceEarthWaterColor} alt="faceEarthWaterColor" class="img" />
        <img src={faceWaterColor} alt="faceEarthWaterColor" class="img" />
        <img src={faceAREarthGIF} alt="arEarthFace" class="img" />
        <p>
          <br />
          <b>background: </b>
          I used an AR template in Procreate to design a watercolor leaf artwork. Then I imported my design into Spark AR Studio and created a face tracker to display my design.
          This can be uploaded as filters to platforms such as instagram, facebook, and etc. Pretty neat!
          <br />
        </p>
      </div>
    );
  }
}
