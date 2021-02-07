import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button'
import "../css/Resume.css";

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div cclass="col">
          <h2>Trends</h2>
          <p>Here are some of my favorite current design trends</p>
          </div>
        </div>
      </div>
    );
  }
}
