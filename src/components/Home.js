import React, { PureComponent } from "react";
import portfolio from "../images/portfolio.png";
import bridal from "../images/Bridal_Art.png";
import nutriciency from "../images/Nutriciency_db.png"
import brunch_menu from "../images/Brunch_Menu.png"
import icons from "../images/Icons.png"
import sketch from "../images/Sketch_Project.png"
import Button from 'react-bootstrap/Button'
import "../css/Home.css";

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row top-row-buffer">
          <div class="col-sm-4">
          <div class="hover-effect">
            <img src={nutriciency} alt="nutriciency" class="img-reponsive" className="portfolio-img" />
            <div class="hover-overlay">
              <a class="hover-info" href="#">Nutriciency Web App Project</a>
            </div>
            </div>
          </div>
          <div class="col-sm-4">
                <div class="hover-effect">
          <img src={bridal} alt="bridal img" class="img-reponsive" className="portfolio-img" />
          <div class="hover-overlay">
            <a class="hover-info" href="#">Bridal Shower Project</a>
          </div>
          </div>
          </div>
          <div class="col-sm-4">
                <div class="hover-effect">
          <img src={brunch_menu} alt="brunch img" class="img-reponsive" className="portfolio-img" />
          <div class="hover-overlay">
            <a class="hover-info" href="#">Menu Graphics Image</a>
          </div>
          </div>
          </div>

          </div>

          <div class="row top-buffer">
            <div class="col-sm-4">
            <div class="hover-effect">
              <img src={icons} alt="icon img" class="img-reponsive" className="portfolio-img" />
              <div class="hover-overlay">
                <a class="hover-info" href="#">SVG Icons</a>
              </div>
              </div>
            </div>
            <div class="col-sm-4">
                  <div class="hover-effect">
            <img src={portfolio} alt="portfolio img" class="img-reponsive" className="portfolio-img" />
            <div class="hover-overlay">
              <a class="hover-info" href="#">Portfolio Mood Board</a>
            </div>
            </div>
            </div>
            <div class="col-sm-4">
                  <div class="hover-effect">
            <img src={sketch} alt="sketch img" class="img-reponsive" className="portfolio-img" />
            <div class="hover-overlay">
              <a class="hover-info" href="#">Sketch Project</a>
            </div>
            </div>
            </div>
            </div>
          </div>

    );
  }
}
