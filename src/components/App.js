import React, { PureComponent } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation"
import "../css/App.css";

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
