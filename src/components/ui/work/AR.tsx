import faceAREarth from "../../../resources/faceAREarth.png";
import faceAREarthGIF from "../../../resources/arEarthFace.gif";
import faceEarthWaterColor from "../../../resources/faceEarthWaterColor.png";
import faceWaterColor from "../../../resources/faceWaterColor.png";
import "../../css/styles.css";
import { Typography } from "@mui/material";

function ARWork() {
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
        <Typography className="h1">Augmented Reality</Typography>
        <br />
        <img
          src={faceAREarth}
          alt="faceEarthWaterColor"
          className="img-fluid"
        />
        <img
          src={faceEarthWaterColor}
          alt="faceEarthWaterColor"
          className="img-fluid"
        />
        <img
          src={faceWaterColor}
          alt="faceEarthWaterColor"
          className="img-fluid"
        />
        <img src={faceAREarthGIF} alt="arEarthFace" className="img-fluid" />
        <Typography className="body">
          <b>background: </b>I used an AR template in Procreate to design a
          watercolor leaf artwork. Then I imported my design into Spark AR
          Studio and created a face tracker to display my design. This can be
          uploaded as filters to platforms such as instagram, facebook, and etc.
          Pretty neat!
        </Typography>
      </div>
    </div>
  );
}
export default ARWork;
