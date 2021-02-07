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
              <h6>Role: The one doing the real work here</h6>
              <p>Hi! I've Mai (my). I got my Computer Info Systems
              Degree at JMU and I've been working in tech ever since! All of my roles have been more focused
              on back end / devops but I have a passion for transitioning my career towards front end design and implementation. I've done UX design / front end work in
              various of projects and I love the creativity that comes with it!</p>
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
              <p>Not the smartest cat, but makes up in cuteness. Will work for food.</p>
            </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
