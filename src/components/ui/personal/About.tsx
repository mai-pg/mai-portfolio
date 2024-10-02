import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import "../../css/styles.css";
import me from "../../../resources/me.png";
import coco from "../../../resources/coco.png";
import kiki from "../../../resources/kiki.png";
import buttersImg1 from "../../../resources/butters-haha.png";
import buttersImg2 from "../../../resources/butters-hahah.png";
import buttersImg3 from "../../../resources/butters-kitchenhelper.png";
import cocoImg1 from "../../../resources/coco-crazyeyes.png";
import bubushkaImg1 from "../../../resources/babushka-snow.png";
import cocoImg2 from "../../../resources/coco.png";
import mokieImg1 from "../../../resources/mokie.png";
import ratImg1 from "../../../resources/rat.png";
import ratImg2 from "../../../resources/rat-haha.png";
import kikiImg1 from "../../../resources/kiki-bag.png";

function About() {
  return (
    <div style={{ padding: "10px" }}>
      <div
        className="container inline"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50px",
        }}
      >
        <img
          src={me}
          className="img-fluid"
          alt="Mai"
          style={{ paddingRight: "10px" }}
        />
        <Typography className="body">
          Hello! Thanks for stopping by. I'm Mai! Outside of work, I love to
          cook, read, play video games, and draw digitally. I also have 3 cats and 2 doggos - yes,
          basically a petting zoo. <i>Thanks for stopping by!</i>
        </Typography>
      </div>
      <div style={{ paddingTop: "10px" }} className="columns-2 overflow-grow">
        <img src={kiki} className="img-fluid" alt="Kiki" />
        <img src={buttersImg1} className="img-fluid" />
        <img src={coco} className="img-fluid" alt="Coco" />
        <img src={kikiImg1} className="img-fluid" />
        <img src={ratImg1} className="img-fluid" />
        <img src={buttersImg2} className="img-fluid" />
        <img src={buttersImg3} className="img-fluid" />
        <img src={bubushkaImg1} className="img-fluid" />
        <img src={mokieImg1} className="img-fluid" />
        <img src={cocoImg1} className="img-fluid" />
        <img src={cocoImg2} className="img-fluid" />
        <img src={ratImg2} className="img-fluid" />
      </div>
    </div>
  );
}

export default About;
