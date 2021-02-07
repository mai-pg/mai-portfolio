import React, { PureComponent } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation"

export default class App extends PureComponent {
  render() {
    return (

      <div class="container">

        <h2>Contact</h2>
        <br/>
        <p>if you would like to reach out to me</p>
        <p><b>Email:</b> mai.tthi@outlook.com</p>
        <p><b>Phone:</b> (703) 975-6530</p>
      </div>
    );
  }
}
