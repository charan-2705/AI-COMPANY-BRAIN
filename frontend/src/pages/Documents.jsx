import { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  IconButton,
  Chip,
  Tooltip,
} from "@mui/material";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      const response = await api.get("/api/documents/");
      setDocuments(response.data);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this document?")) return;

    try {
      await api.delete(`/api/documents/${id}`);
      fetchDocuments();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A" }}>
      <Navbar />

      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, maxWidth: "1200px", margin: "0 auto" }}>
          <Box mb={4}>
            <Typography variant="h4" fontWeight="800">
              Documents Base
            </Typography>

            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "14px", fontWeight: 500 }}>
              Review and manage uploaded documents used by the AI knowledge base.
            </Typography>
          </Box>

          {loading ? (
            <Typography sx={{ color: "#64748B" }}>Loading documents...</Typography>
          ) : documents.length === 0 ? (
            <Card sx={{ p: 5, textAlign: "center", borderRadius: "14px" }}>
              <Typography sx={{ color: "#94A3B8", fontWeight: 600 }}>
                No documents uploaded yet.
              </Typography>
            </Card>
          ) : (
            <Stack spacing={2}>
              {documents.map((doc) => (
                <Card
                  key={doc.id}
                  sx={{
                    borderRadius: "14px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
                  }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          background: "rgba(79,70,229,0.06)",
                          color: "#4F46E5",
                          display: "flex",
                        }}
                      >
                        <InsertDriveFileOutlinedIcon />
                      </Box>

                      <Box>
                        <Typography sx={{ fontWeight: 700, color: "#1E293B", fontSize: "15px" }}>
                          {doc.filename}
                        </Typography>

                        <Typography sx={{ color: "#94A3B8", fontSize: "12px", mt: 0.4 }}>
                          Path: {doc.filepath}
                        </Typography>
                      </Box>
                    </Box>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Chip
                        icon={<VerifiedUserOutlinedIcon sx={{ fontSize: "14px !important" }} />}
                        label={doc.status}
                        sx={{
                          fontWeight: 600,
                          fontSize: "12px",
                          borderRadius: "8px",
                          bgcolor: "rgba(16,185,129,0.08)",
                          color: "#10B981",
                          border: "1px solid rgba(16,185,129,0.15)",
                          "& .MuiChip-icon": { color: "inherit" },
                        }}
                      />

                      <Tooltip title="Delete Document" arrow>
                        <IconButton
                          onClick={() => handleDelete(doc.id)}
                          sx={{
                            color: "#94A3B8",
                            border: "1px solid rgba(0,0,0,0.06)",
                            borderRadius: "10px",
                            "&:hover": {
                              color: "#EF4444",
                              background: "rgba(239,68,68,0.05)",
                              borderColor: "rgba(239,68,68,0.15)",
                            },
                          }}
                        >
                          <DeleteOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                </Card>
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Documents;