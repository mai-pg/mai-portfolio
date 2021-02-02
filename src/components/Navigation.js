import React, { PureComponent } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "../css/Navigation.css";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default class App extends PureComponent {
  render() {
    return (
      <HashRouter>
           <div>
             <div className="component-navlink">
             <NavLink to="/Home" className="app-navlink" activeClassName="navlink-active">Home</NavLink>
             |
             <NavLink to="/About" className="app-navlink" activeClassName="navlink-active">About</NavLink>
             |
             <NavLink to="/Resume" className="app-navlink" activeClassName="navlink-active">Resume</NavLink>
             |
             <NavLink to="/Contact" className="app-navlink" activeClassName="navlink-active">Contact</NavLink>
             </div>
             <div className="content">
               <Route path="/Home" component={Home}/>
               <Route path="/About" component={About}/>
               <Route path="/Resume" component={Resume}/>
               <Route path="/Contact" component={Contact}/>
             </div>
           </div>
         </HashRouter>
        );
      }
}
