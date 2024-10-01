import Grid from "@mui/material/Grid2";
import CustomCard from "./Cards";

export const Cards = () => {
  const cards = [
    {
      title: "Digital Art",
      src: "https://hostedpics.s3.us-east-2.amazonaws.com/greeneye.png",
      description: "",
      navURL: "digitalart",
    },
    {
      title: "AR Experiment",
      src: "https://hostedpics.s3.us-east-2.amazonaws.com/image.png",
      description: "",
      navURL: "/AR",
    },
    {
      title: "Nutriciency Web App",
      src: "https://hostedpics.s3.us-east-2.amazonaws.com/image2.png",
      description: "",
      navURL: "/nutriciency",
    },
  ];

  return (
    <Grid
      container
      padding={20}
      rowSpacing={{ sm: 2 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      {Array.from(cards).map((card, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 6 }}>
          <CustomCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
