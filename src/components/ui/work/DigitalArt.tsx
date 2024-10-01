import brunch from "../../../resources/digitalart/Brunch_Menu.png";
import bean1 from "../../../resources/digitalart/bean1.png";
import bean2 from "../../../resources/digitalart/bean2.png";
import bean3 from "../../../resources/digitalart/bean3.png";
import blueberrydrink from "../../../resources/digitalart/blueberrydrink.png";
import pinkdrink from "../../../resources/digitalart/pinkdrink.png";
import mushyhunt from "../../../resources/digitalart/mushyhunt.png";
import peonyflower from "../../../resources/digitalart/peonyflower.png";
import watercolorFig from "../../../resources/digitalart/watercolorFig.png";
import watercolorPeony from "../../../resources/digitalart/watercolorPeony.png";
import sketch from "../../../resources/digitalart/sketch.png";
import computer from "../../../resources/digitalart/computer.gif"; 
import greeneye from "../../../resources/digitalart/greeneye.png";
import pups from "../../../resources/digitalart/pups.png";
import randomart from "../../../resources/digitalart/randomart.png";
import randombear from "../../../resources/digitalart/randombear.png";
import rose from "../../../resources/digitalart/rose.png";
import scary from "../../../resources/digitalart/scary.png";
import scary2 from "../../../resources/digitalart/scary2.png";
import snifftest from "../../../resources/digitalart/snifftest.png";
import weddinggraphic from "../../../resources/digitalart/weddinggraphic.png";
import wipnora from "../../../resources/digitalart/wip-nora.png";
import "../../css/styles.css";
import { Typography } from "@mui/material";


function ARWork() {
      return (
        <div style={{paddingTop: '50px'}}>
        <div className="container" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px'}}>
          <br />
          <Typography className="h1">My Digital Artwork</Typography>
          <br />
         <Typography className="body">
            I love creating digital art. Here are some of my work in illustrator and procreate over the years.
            </Typography>
          <img src={weddinggraphic} className="img-fluid" />
          <img src={greeneye} className="img-fluid" />
          <img src={pups} className="img-fluid" />
          <img src={randomart} className="img-fluid" />
          <img src={randombear} className="img-fluid" />
          <img src={rose} className="img-fluid" />
          <img src={scary} className="img-fluid" />
          <img src={scary2} className="img-fluid" />
          <img src={wipnora} className="img-fluid" />
          <img src={snifftest} className="img-fluid" />
          <img src={watercolorFig} className="img-fluid" />
          <img src={sketch} className="img-fluid" />
          <img src={bean1} className="img-fluid" />
          <img src={bean2} className="img-fluid" />
          <img src={bean3} className="img-fluid" />
          <img src={computer} className="img-fluid" />
        </div>
        </div>
      );
  };
  export default ARWork;
  