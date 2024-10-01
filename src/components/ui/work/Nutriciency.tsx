import "../../css/styles.css";
import { Typography } from "@mui/material";
import nutriciency_popover from "../../../resources/nutriciency_popover.png";
import nutriciency_cart from "../../../resources/nutriciency_cart.png";
import nutriciency_chart from "../../../resources/nutriciency_dashboard.png";
import nutriciency_db from "../../../resources/nutriciency_db.png";

function Nutriciency() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <div
        className="container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "25px",
        }}
      >
        <br />
        <Typography className="h1">Nutriciency Web App</Typography>
        <br />
        <img
          src={nutriciency_popover}
          alt="nutriciency"
          className="img-fluid"
        />
        <img src={nutriciency_db} alt="nutriciency" className="img-fluid" />
        <Typography className="body">
          <b>Background:</b>
          This was a project for my senior capstone class at JMU. Teamed with 7
          people (2 frontend, 5 backend), we were tasked to create a C#/.NET web
          app for a local food bank. They needed the ability to view their
          inventory and our tool to be able to assist them in making informative
          decision on which type of food they had room to take in.
        </Typography>
        <Typography className="body">
          <b>My Role:</b> I focused more on the back end development and half
          way through the project, I took over doing the front end development.
          A lot of the front end was already built out, but as we progressed to
          further stages, we had to make front end changes to integrate
          additional customer requirements.
        </Typography>
        <Typography className="body">
          <b>Outcome:</b> We placed third. We decided not to host our official
          end product, but the frontend devs got to host their static web page
          work through JMU. Their frontend app comes with none of our backend
          work or any new customer requirements.
        </Typography>
        <img src={nutriciency_chart} alt="nutriciency" className="img-fluid" />
        <img src={nutriciency_cart} alt="nutriciency" className="img-fluid" />
      </div>
    </div>
  );
}
export default Nutriciency;
