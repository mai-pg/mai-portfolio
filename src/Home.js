import React, { PureComponent } from "react";
import portfolio from "./portfolio.png";
import Button from 'react-bootstrap/Button'

export default class App extends PureComponent {
  render() {
    return (
      <div className="row">
      <div ClassName="column">
      <img src={portfolio} alt="mai-portfolio" className="portfolio-img" />
      <Button>Test</Button>
      </div>
      </div>
    );
  }
}
