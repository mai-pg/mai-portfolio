import React, { PureComponent } from "react";
import me from "../images/me.png";
import coco from "../images/coco.png";
import kiki from "../images/kiki.png";
import "../css/About.css";

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">
      <div class="row justify-content-center top-row-buffer">
        <div class="col-sm-4">
          <div class="card">
            <img src={me} class="img-fluid" alt="Mai Nguyen" />
            <div class="container">
              <h2>Mai Nguyen</h2>
              <p>Hi! I'm Mai (my). I got my Computer Info Systems
              Degree at JMU and I've been working in tech ever since! My role consists of: devops, testing, and providing ui/ux improvements! </p>
              <p>When I'm not working, my favorite thing to do is play video games. Some of the games I'm currently playing: lol tft (challengers ftw), apex, and halo infinite.
              </p>
            </div>
          </div>
        </div>
        </div>
        <br/>
        <div class="row justify-content-center top-buffer">
        <div class="col-sm-4">
          <div class="card">
            <img src={kiki} class="img-fluid" alt="Kiki" / >
            <div class="container">
              <h2>Kiki</h2>
              <h6>Role: Cat Director</h6>
              <p>Cool cat. Great Hunter. Has some separation anxiety.</p>
            </div>
          </div>
          </div>
        <div class="col-sm-4">
          <div class="card">
            <img src={coco} class="img-fluid" alt="Coco"  />
            <div class="container">
              <h2>Coco</h2>
              <h6>Role: Kitty Designer</h6>
              <p>Not the brightest cat, but makes up in cuteness. Will work for food.</p>
            </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
