import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  LinearProgress,
  Stack,
  Chip,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { uploadDocument } from "../services/uploadService";
import api from "../services/api";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);

  const fetchDocuments = async () => {
    try {
      const response = await api.get("/api/documents/");
      setFiles(
        response.data.map((doc) => ({
          name: doc.filename,
          size: "Uploaded",
          progress: 100,
          status: doc.status,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      await uploadDocument(formData);

      alert("File uploaded successfully!");
      setSelectedFile(null);
      fetchDocuments();
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A" }}>
      <Navbar />

      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, maxWidth: "1000px", margin: "0 auto" }}>
          <Box mb={4}>
            <Typography variant="h4" fontWeight="800">
              Upload Documents
            </Typography>
            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "14px", fontWeight: 500 }}>
              Upload company documents for secure local AI processing.
            </Typography>
          </Box>

          <Card
            elevation={0}
            sx={{
              p: 6,
              borderRadius: "16px",
              textAlign: "center",
              border: "2px dashed #E2E8F0",
              background: "#FFFFFF",
            }}
          >
            <CloudUploadOutlinedIcon sx={{ fontSize: 56, color: "#94A3B8" }} />

            <Typography variant="h6" fontWeight="700" mt={2}>
              Browse and upload files
            </Typography>

            <Typography sx={{ color: "#64748B", fontSize: "13px", mt: 0.5 }}>
              Supported formats: PDF, DOCX, TXT
            </Typography>

            {selectedFile && (
              <Typography sx={{ mt: 2, fontWeight: 600 }}>
                Selected: {selectedFile.name}
              </Typography>
            )}

            <Button component="label" variant="outlined" sx={{ mt: 3, borderRadius: "10px", textTransform: "none" }}>
              Browse Local System
              <input hidden type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
            </Button>

            <Button variant="contained" onClick={handleUpload} sx={{ mt: 3, ml: 2, borderRadius: "10px", textTransform: "none" }}>
              Upload
            </Button>
          </Card>

          <Card elevation={0} sx={{ mt: 4, p: 3, borderRadius: "16px", background: "#FFFFFF" }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h6" fontWeight="700">
                Uploaded Files
              </Typography>
              <Chip label={`${files.length} files`} size="small" />
            </Box>

            {files.length === 0 ? (
              <Typography sx={{ color: "#94A3B8", textAlign: "center", py: 4 }}>
                No files uploaded yet.
              </Typography>
            ) : (
              <Stack spacing={2.5}>
                {files.map((file, idx) => (
                  <Box key={idx} sx={{ p: 2, borderRadius: "12px", background: "#F8FAFC" }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <InsertDriveFileOutlinedIcon sx={{ fontSize: 22 }} />
                        <Box>
                          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                            {file.name}
                          </Typography>
                          <Typography sx={{ fontSize: "12px", color: "#94A3B8" }}>
                            {file.status}
                          </Typography>
                        </Box>
                      </Stack>

                      <CheckCircleRoundedIcon sx={{ color: "#10B981", fontSize: 18 }} />
                    </Box>

                    <Box sx={{ mt: 1.5 }}>
                      <LinearProgress variant="determinate" value={100} />
                    </Box>
                  </Box>
                ))}
              </Stack>
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Upload;