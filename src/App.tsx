import { ShootingStars } from "./components/ui/background/shooting-stars";
import { StarsBackground } from "./components/ui/background/stars-background";
import Welcome from "./components/ui/Welcome";
import Home from "./components/ui/Home";
import About from "./components/ui/personal/About";
import Cards from './components/ui/FocusCards';
import { Link, Route, Routes } from "react-router-dom";
import Resume from "./components/ui/personal/Resume";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import ARWork from "./components/ui/work/AR";
import Nutriciency from "./components/ui/work/Nutriciency";
import DigitalArt from "./components/ui/work/DigitalArt";



function App() {

  return (
    <div className="min-h-max h-lvh bg-neutral-900 relative w-full overflow-auto">
      <div style={{ zIndex: -1 }}>
      <ShootingStars />
      <StarsBackground />
      </div>
    <Grid container rowSpacing={8} >
    <Grid size={2} padding={1}>
    <header style={{position: 'fixed'}}><Home/>
    <Typography variant="h5" color="White" fontFamily="sans-serif">
    <Link to="/">+home </Link> 
    <Link to="portfolio/about">+about </Link> 
    <Link to="portfolio/resume">+resume </Link> 
    </Typography></header></Grid>
 
    <Grid size={9}>
      <Routes>
        <Route path="*" Component={Cards} />
        <Route path="portfolio/about" Component={About} />
        <Route path="portfolio/resume" Component={Resume} />
        <Route path="portfolio/AR" Component={ARWork} />
        <Route path="portfolio/digitalart" Component={DigitalArt} />
        <Route path="portfolio/nutriciency" Component={Nutriciency} />
        </Routes>
      </Grid>

    </Grid>
    </div>
  );
}

export default App;
