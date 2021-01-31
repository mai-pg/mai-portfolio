import React, { PureComponent } from "react";
import Header from "./Header";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import "./App.css";

export default class App extends PureComponent {
  render() {
    return (
      <HashRouter>
      <body>
           <div>
             <Header />
             <div className="component-navlink">
             <NavLink to="/Home" className="app-navlink" activeClassName="navlink-active">Home</NavLink>
             |
             <NavLink to="/Contact" className="app-navlink" activeClassName="navlink-active">Contact</NavLink>
             </div>
             <div className="content">
               <Route path="/Home" component={Home}/>
               <Route path="/Contact" component={Contact}/>
             </div>
           </div>
           </body>
         </HashRouter>
    );
  }
}
