import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button'
import iphone_dark from "../images/iphone_darkmode.gif"

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">

          <h2>Trends</h2>
          <br/>
          <p>Here are some of my favorite design trends:
          <br/><br/>
          <h6><b>
          Design:</b> Dark Mode.
          <br/>
          <b>Color:</b> Skin tones. Muted.
          <br/>
          </h6>
          </p>

      </div>
    );
  }
}
