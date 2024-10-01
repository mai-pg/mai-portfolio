// import Button from "@mui/material/Button";
// import DownloadIcon from '@mui/icons-material/Download';
// import { saveAs } from 'file-saver';
//import { Document } from 'react-pdf';
import resume from "../../../resources/mai-resume.png";
import "../../css/styles.css";

function Resume() {
  // const handleDownload = () => {
  //     saveAs('../../resources/mai-resume.pdf', 'mai-resume.pdf');
  // }
  return (
    <div
      className="container overflow-auto"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "25px",
      }}
    >
      <div className="container">
        <img src={resume} />
        {/* <Button
    variant="contained"
    size="large"
    startIcon={<DownloadIcon />}
    onClick={handleDownload}
  >
    Download Resume
  </Button> */}
        {/* <Document
    file={'../../../resources/mai-resume.pdf'}
      /> */}
      </div>
    </div>
  );
}

export default Resume;
