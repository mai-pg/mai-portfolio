import { Vortex } from "./background/vortex";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Welcome() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <Typography
          gutterBottom
          className="text-2xl md:text-6xl font-bold text-center"
          color="White"
          fontFamily="sans-serif"
        >
          Hi!
        </Typography>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          come explore mai's creative side.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button
            style={{
              fontSize: "18px",
              color: "#EA9DFF",
              fontVariant: "small-caps",
              borderColor: "#EA9DFF",
              fontFamily: "sans-serif",
            }}
            variant="outlined"
          >
            Enter
          </Button>
        </div>
      </Vortex>
    </div>
  );
}

export default Welcome;
