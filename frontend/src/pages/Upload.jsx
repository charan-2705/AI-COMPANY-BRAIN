import { Box, Button, Card, Typography, LinearProgress } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Upload() {
  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex", width: "100vw", minHeight: "100vh", background: "#F5F7FB" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Upload Documents
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Upload company PDFs to train CortexAI knowledge base.
          </Typography>

          <Card
            sx={{
              p: 5,
              borderRadius: 4,
              textAlign: "center",
              border: "2px dashed #1565C0",
              background: "#ffffff",
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 70, color: "#1565C0" }} />

            <Typography variant="h6" mt={2}>
              Drag & Drop your PDF here
            </Typography>

            <Typography color="text.secondary" mt={1}>
              or browse from your computer
            </Typography>

            <Button variant="contained" sx={{ mt: 3 }}>
              Browse File
            </Button>
          </Card>

          <Card sx={{ mt: 4, p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Uploaded Files
            </Typography>

            <Typography mt={2}>📄 HR_Policy.pdf</Typography>
            <LinearProgress variant="determinate" value={100} sx={{ my: 1 }} />

            <Typography mt={2}>📄 Leave_Policy.pdf</Typography>
            <LinearProgress variant="determinate" value={75} sx={{ my: 1 }} />

            <Typography mt={2}>📄 Employee_Handbook.pdf</Typography>
            <LinearProgress variant="determinate" value={100} sx={{ my: 1 }} />
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Upload;