import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./personal/About";

const CustomCard = ({
  title,
  description,
  src,
  navURL,
}: {
  title: string;
  description?: string;
  src: string;
  navURL: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }
  function handleMouseOut() {
    setIsHovered(false);
  }

  function checkMouseOver() {
    if (isHovered) {
      return 1;
    } else return 0.5;
  }

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(navURL);
  };

  return (
    <Card sx={{ backgroundColor: "rgba(223, 148, 255, 0.1)" }}>
      <CardActionArea
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleNavigation}
      >
        <CardContent>
          <CardMedia
            component="img"
            image={src}
            sx={{ maxHeight: 300, padding: 0.5 }}
          />
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
