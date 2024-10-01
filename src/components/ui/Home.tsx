import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

function Home() {

const text = "hi, i am mai. (◕ᴗ◕✿)".split(" ");

  return (
    <Grid container padding={6}>
    <Grid size={{ xs: 6, md: 8 }}>
    <Typography gutterBottom variant="h2" color="White" fontFamily="sans-serif">
    {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .7,
            delay: i / .9,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </Typography>
    </Grid>
    </Grid>
  );
}

export default Home;
