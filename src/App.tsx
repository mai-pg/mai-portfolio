import { ShootingStars } from "./components/ui/background/shooting-stars";
import { StarsBackground } from "./components/ui/background/stars-background";
import Welcome from "./components/ui/Welcome";
import Home from "./components/ui/Home";
import About from "./components/ui/personal/About";
import Cards from "./components/ui/FocusCards";
import { Link, Route, Routes } from "react-router-dom";
import Resume from "./components/ui/personal/Resume";
import Grid from "@mui/material/Grid2";
import { Paper, Typography } from "@mui/material";
import ARWork from "./components/ui/work/AR";
import Nutriciency from "./components/ui/work/Nutriciency";
import DigitalArt from "./components/ui/work/DigitalArt";
import Ticket from "./components/ui/work/SMS-Ticket-Check-App";

function App() {
  return (
    <div className="min-h-max h-lvh bg-neutral-900 relative w-full overflow-auto">
      <div style={{ zIndex: -1 }}>
        <ShootingStars />
        <StarsBackground />
      </div>
      <Grid container columns={{ xs: 1, sm: 8, md: 12 }}>
        <Grid size={3}>
          <header style={{ position: "relative" }}>
            <Home />
            <Typography variant="h5" color="White" fontFamily="sans-serif">
              <Link to="/">+home </Link>
              <Link to="/about">+about </Link>
              <Link to="/resume">+resume </Link>
            </Typography>
          </header>
        </Grid>
        <Grid size={9} columns={{ xs: 6, sm: 6 }}>
          <Routes>
            <Route path="/" Component={Cards} />
            <Route path="/about" Component={About} />
            <Route path="/resume" Component={Resume} />
            <Route path="/AR" Component={ARWork} />
            <Route path="/digitalart" Component={DigitalArt} />
            <Route path="/nutriciency" Component={Nutriciency} />
            <Route path="/sms-ticket-app" Component={Ticket} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
