import "../../css/styles.css";
import { Typography } from "@mui/material";

function ARWork() {
  return (
    <div style={{ padding: "50px" }}>
      <div
        className="container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "25px",
        }}
      >
        <br />
        <Typography className="h1">SMTP SMS Ticket Check</Typography>
        <br />
        <img
          src="https://hostedpics.s3.us-east-2.amazonaws.com/py-app.png"
          alt="sms-1"
          className="img-fluid"
        />
                <img
          src="https://hostedpics.s3.us-east-2.amazonaws.com/ren-text.jpeg"
          alt="sms-4"
          className="img-fluid"
        />
        <img
          src="https://hostedpics.s3.us-east-2.amazonaws.com/lambda.png"
          alt="sms-2"
          className="img-fluid"
        />
        <img
          src="https://hostedpics.s3.us-east-2.amazonaws.com/schedule.png"
          alt="sms-3"
          className="img-fluid"
        />

        <Typography className="body">
          <b>issue: </b> my friend tried to buy rennassiance fair tickets for a
          specific day online but they were sold out! the fair's website states that they process refunds
          and release the tickets back out for a first come first serve basis.
        </Typography>
        <br />
        <br />
        <Typography className="body">
          <b>solution: </b> i implemented a python script using beautifulsoup /
          smtp / requests modules to check the availability of tickets and would
          send a text message to my phone. it needs to run on a time interval
          so i created an aws lambda script that ran on a schedule.
        </Typography>
      </div>
    </div>
  );
}
export default ARWork;
