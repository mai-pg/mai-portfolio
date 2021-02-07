import React, { PureComponent } from 'react';
import construction_page from "../images/Construction.jpeg";
import "../css/Construction.css"

export default class Header extends PureComponent {
  render() {
    return (
      <div class="container">
      <br/>
      <h2>Page Under Construction</h2>
      <br/>
      <p>^_^ check back later ^_^ <br/>if you’re looking for more fun non-tech creative work: instagram @maidesiigns</p>
      < br/>
      <img src={construction_page} alt="construction page" class="img-reponsive"/>
      </div>
    );
  }
}
