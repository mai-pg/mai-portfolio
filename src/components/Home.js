import React, { PureComponent } from "react";
import portfolio from "../images/portfolio.png";
import bridal from "../images/Bridal_Art.png";
import Button from 'react-bootstrap/Button'
import "../css/Home.css";

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">

        <div class="row">
          <div class="col">
          <img src={portfolio} alt="mai-portfolio" className="portfolio-img" />
          </div>
          <div class="col">
          <img src={bridal} alt="bridal img" className="portfolio-img" />
          </div>
          <div class="col">
          <img src={portfolio} alt="mai-portfolio" className="portfolio-img" />
          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={portfolio} alt="mai-portfolio" className="portfolio-img" />
          </div>
          <div class="col">
          <img src={portfolio} alt="mai-portfolio" className="portfolio-img" />
          </div>
          <div class="col">
          <img src={portfolio} alt="mai-portfolio" className="portfolio-img" />
          </div>
        </div>
      </div>
    );
  }
}
