import React, { PureComponent } from 'react';
import nutriciency_popover from "../images/nutriciency_popover.png"
import nutriciency_cart from "../images/nutriciency_cart.png"
import nutriciency_chart from "../images/nutriciency_dashboard.png"
import nutriciency_db from "../images/nutriciency_db.png"
import "../css/Nutriciency.css";


export default class Header extends PureComponent {
  render() {
    return (
      <div class="container">
        <br />
        <h2>Nutriciency Web App</h2>
        <br />
        <img src={nutriciency_popover} alt="nutriciency" class="img" />
        <img src={nutriciency_db} alt="nutriciency" class="img" />
        <p>
          <br />
          <b>Background:</b>
          <br />This was a project for my senior capstone class at JMU. Teamed with 7 people (2 frontend, 5 backend), we were tasked to create a C#/.NET web app for a local food bank.
          They needed the ability to view their inventory and our tool to be able to assist them in making informative decision on
          which type of food they had room to take in.
          <br /><br />
          <b>My Role:</b> I focused more on the back end development and half way through the project, I took over doing the front end development.
          A lot of the front end was already built out, but as we progressed to further stages, we had to make front end changes to integrate
          additional customer requirements.

          <br /><br />
          <b>Outcome:</b> We placed third. We decided not to host our official end product, but the frontend devs got to host their static web page work through JMU.
          Their frontend app comes with none of our backend work or any new customer requirements.
          You can view it here: <a href="http://smaducopia.com/nutriciency/about.html" target="_blank">Nutriciency Web App Project</a>
        </p>
        <img src={nutriciency_chart} alt="nutriciency" class="img" />
        <img src={nutriciency_cart} alt="nutriciency" class="img" />
      </div>
    );
  }
}
