import React, { PureComponent } from "react";
import resume from "../images/Mai_Nguyen_Resume.png";
import Button from 'react-bootstrap/Button'
import "../css/Resume.css";

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div cclass="col">
          <img src={resume} alt="mai-resume" className="resume-img" />
          <Button>Download</Button>
          </div>
        </div>
      </div>
    );
  }
}
