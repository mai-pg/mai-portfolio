import React, { PureComponent } from 'react';
import brunch from "../images/Brunch_Menu.png";
import bean1 from "../images/bean1.png";
import bean2 from "../images/bean2.png";
import bean3 from "../images/bean3.png";
import blueberrydrink from "../images/blueberrydrink.png";
import pinkdrink from "../images/pinkdrink.png";
import mushyhunt from "../images/mushyhunt.png";
import peonyflower from "../images/peonyflower.png";
import watercolorFig from "../images/watercolorFig.png";
import watercolorPeony from "../images/watercolorPeony.png";
import sketch from "../images/sketch.png";
import "../css/ArtWork.css"

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">
        <br />
        <h2>My Digital Artwork</h2>
        <br />
        <p>
          I love creating digital art. Here are some of my work in illustrator and procreate over the years.
          <br />if you’re looking for more fun non-tech creative work: instagram @maidesiigns
        </p>
        <div class="row top-row-buffer">
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={blueberrydrink} alt="blueberrydrink" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={pinkdrink} alt="pinkdrink img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={mushyhunt} alt="mushyhunt img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
        </div>
        <div class="row top-buffer">
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={sketch} alt="sketch img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={watercolorFig} alt="watercolorFig img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={watercolorPeony} alt="watercolorPeony img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
        </div>
        <div class="row top-buffer">
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={peonyflower} alt="peonyflower img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={bean1} alt="bean1 img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={bean2} alt="bean2 img" class="img-reponsive" className="artwork-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
