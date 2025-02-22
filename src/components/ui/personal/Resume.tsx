import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { saveAs } from "file-saver";
import "../../css/styles.css";
import { Divider } from "@mui/material";


function Resume() {

  const pdfURL = "https://hostedpics.s3.us-east-2.amazonaws.com/mai-nguyen_resume.pdf"


  const handleDownload = () => {
    saveAs(pdfURL, "mai-resume.pdf");
  };
  return (
    <div style={{ padding: "10px" }}>
      <div
        className="container"
        style={{
          display: "flex",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "25px",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            fontSize: "18px",
            color: "#EA9DFF",
            fontVariant: "small-caps",
            borderColor: "#EA9DFF",
            fontFamily: "sans-serif",
          }}
          variant="outlined"
          onClick={handleDownload}
          startIcon={<DownloadIcon />}
        >
          Download Resume
        </Button>
        <Divider />
        {/* <img src={pdfURL} /> */}
      </div>
    </div>
  );
}

export default Resume;

// WIP
// const Resume: React.FC = () =>  {
//     const handleDownload = async () => {
//       const docURL = 'https://hostedpics.s3.us-east-2.amazonaws.com/mai-resume.pdf';
//       try {
//           const response = await fetch(docURL);

//           if (!response.ok) {
//               // add in snack bar
//           }

//       const blob = await response.blob();

//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.download = 'mai-resume.pdf';
//       link.href = url;

//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//   } catch (error) {
//       // snackbar error
//   }
//     };
//     return (
//       <div
//         className="container overflow-auto"
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.05)",
//           borderRadius: "25px",
//         }}
//       >
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleDownload}
//           startIcon={<DownloadIcon />}
//         >
//           Download Resume
//         </Button>
//         <Divider />
//         <img src={resume} />

//         {/* <Document
//       file={'../../../resources/mai-resume.pdf'}
//         /> */}
//       </div>
//     );
//   }

//   export default Resume;
