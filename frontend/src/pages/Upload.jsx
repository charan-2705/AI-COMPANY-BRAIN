import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  LinearProgress,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { uploadDocument } from "../services/uploadService";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [files, setFiles] = useState([
    { name: "HR_Policy.pdf", size: "2.4 MB", progress: 100, status: "Completed" },
    { name: "Leave_Policy.pdf", size: "1.1 MB", progress: 75, status: "Uploading" },
    { name: "Employee_Handbook.pdf", size: "4.8 MB", progress: 100, status: "Completed" },
  ]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    setFiles((prev) => [
      {
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        progress: 0,
        status: "Ready to Upload",
      },
      ...prev,
    ]);
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

      setFiles((prev) =>
        prev.map((file, index) =>
          index === 0
            ? { ...file, progress: 100, status: "Completed" }
            : file
        )
      );
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
              Drag & drop files here, or browse
            </Typography>

            <Typography sx={{ color: "#64748B", fontSize: "13px", mt: 0.5 }}>
              Supported formats: PDF, DOCX, TXT
            </Typography>

            <Button
              component="label"
              variant="outlined"
              sx={{
                mt: 3,
                px: 3,
                py: 1,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Browse Local System
              <input
                hidden
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
              />
            </Button>

            <Button
              variant="contained"
              onClick={handleUpload}
              sx={{
                mt: 2,
                ml: 2,
                px: 4,
                py: 1,
                borderRadius: "10px",
                textTransform: "none",
              }}
            >
              Upload
            </Button>
          </Card>

          <Card elevation={0} sx={{ mt: 4, p: 3, borderRadius: "16px", background: "#FFFFFF" }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h6" fontWeight="700">
                Ingestion Monitor
              </Typography>
              <Chip label={`${files.length} active items`} size="small" />
            </Box>

            <Stack spacing={2.5}>
              {files.map((file, idx) => {
                const isDone = file.progress === 100;

                return (
                  <Box key={idx} sx={{ p: 2, borderRadius: "12px", background: "#F8FAFC" }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <InsertDriveFileOutlinedIcon sx={{ fontSize: 22 }} />
                        <Box>
                          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                            {file.name}
                          </Typography>
                          <Typography sx={{ fontSize: "12px", color: "#94A3B8" }}>
                            {file.size} • {file.status}
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography sx={{ fontSize: "13px", fontWeight: 700 }}>
                          {file.progress}%
                        </Typography>
                        {isDone ? (
                          <CheckCircleRoundedIcon sx={{ color: "#10B981", fontSize: 18 }} />
                        ) : (
                          <IconButton size="small">
                            <CancelOutlinedIcon sx={{ fontSize: 18 }} />
                          </IconButton>
                        )}
                      </Stack>
                    </Box>

                    <Box sx={{ mt: 1.5 }}>
                      <LinearProgress variant="determinate" value={file.progress} />
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Upload;