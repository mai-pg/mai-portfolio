import React, { PureComponent } from "react";
import Header from "./Header";
import Navigation from "./Navigation"
import "./App.css";

export default class App extends PureComponent {
  render() {
    return (
           <div>
             <Header />
             <Navigation />
           </div>
    );
  }
}
