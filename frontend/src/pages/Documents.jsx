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
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Documents() {
  const documents = [
    {
      name: "HR_Policy.pdf",
      date: "04 Jul 2026",
      status: "Indexed",
      size: "2.4 MB",
    },
    {
      name: "Leave_Policy.pdf",
      date: "03 Jul 2026",
      status: "Indexed",
      size: "1.1 MB",
    },
    {
      name: "Employee_Handbook.pdf",
      date: "01 Jul 2026",
      status: "Processing",
      size: "4.8 MB",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A" }}>
      <Navbar />

      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar />

        {/* Main Workdeck Workspace Container */}
        <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Section Header Layout */}
          <Box mb={4}>
            <Typography variant="h4" fontWeight="800" sx={{ color: "#0F172A", letterSpacing: "-0.6px" }}>
              Documents Base
            </Typography>
            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "14px", fontWeight: 500 }}>
              Review, manage, and verify document embeddings fed into the active AI model core.
            </Typography>
          </Box>

          {/* Document Rows Stream Container */}
          <Stack spacing={2}>
            {documents.map((doc, index) => {
              const isProcessing = doc.status === "Processing";

              return (
                <Card
                  key={index}
                  sx={{
                    borderRadius: "14px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.01)",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      borderColor: "rgba(79, 70, 229, 0.2)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                      transform: "translateX(2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: 2,
                    }}
                  >
                    {/* Left Side: Metadata and File Details */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          background: isProcessing ? "rgba(245, 158, 11, 0.06)" : "rgba(79, 70, 229, 0.06)",
                          color: isProcessing ? "#F59E0B" : "#4F46E5",
                          display: "flex",
                        }}
                      >
                        <InsertDriveFileOutlinedIcon />
                      </Box>
                      
                      <Box>
                        <Typography sx={{ fontWeight: 650, color: "#1E293B", fontSize: "15px", letterSpacing: "-0.1px" }}>
                          {doc.name}
                        </Typography>
                        
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 0.4 }}>
                          <Typography variant="body2" sx={{ color: "#94A3B8", fontSize: "12px", fontWeight: 500 }}>
                            Added: {doc.date}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#94A3B8", fontSize: "12px", fontWeight: 500 }}>
                            •
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#94A3B8", fontSize: "12px", fontWeight: 500 }}>
                            Size: {doc.size}
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>

                    {/* Right Side: Status Badging & Action Elements */}
                    <Box 
                      sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: { xs: "space-between", sm: "flex-end" }, 
                        width: { xs: "100%", sm: "auto" }, 
                        gap: 3 
                      }}
                    >
                      {/* Interactive Status Chip Container */}
                      <Chip
                        icon={
                          isProcessing ? (
                            <AutorenewIcon 
                              sx={{ 
                                fontSize: "14px !important", 
                                animation: "spin 2s linear infinite",
                                "@keyframes spin": { "100%": { transform: "rotate(360deg)" } }
                              }} 
                            />
                          ) : (
                            <VerifiedUserOutlinedIcon sx={{ fontSize: "14px !important" }} />
                          )
                        }
                        label={doc.status}
                        sx={{
                          fontWeight: 600,
                          fontSize: "12px",
                          borderRadius: "8px",
                          bgcolor: isProcessing ? "rgba(245, 158, 11, 0.08)" : "rgba(16, 185, 129, 0.08)",
                          color: isProcessing ? "#D97706" : "#10B981",
                          border: isProcessing ? "1px solid rgba(245, 158, 11, 0.15)" : "1px solid rgba(16, 185, 129, 0.15)",
                          "& .MuiChip-icon": { color: "inherit" },
                        }}
                      />

                      {/* Explicit Action Triggers */}
                      <Stack direction="row" spacing={1}>
                        <Tooltip title="Download Original Document" arrow>
                          <IconButton
                            disabled={isProcessing}
                            sx={{
                              color: "#64748B",
                              border: "1px solid rgba(0, 0, 0, 0.06)",
                              borderRadius: "10px",
                              p: 1,
                              "&:hover": {
                                color: "#0F172A",
                                background: "#F1F5F9",
                                borderColor: "rgba(0, 0, 0, 0.12)",
                              },
                            }}
                          >
                            <FileDownloadOutlinedIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete Document Base" arrow>
                          <IconButton
                            sx={{
                              color: "#94A3B8",
                              border: "1px solid rgba(0, 0, 0, 0.06)",
                              borderRadius: "10px",
                              p: 1,
                              "&:hover": {
                                color: "#EF4444",
                                background: "rgba(239, 68, 68, 0.05)",
                                borderColor: "rgba(239, 68, 68, 0.15)",
                              },
                            }}
                          >
                            <DeleteOutlineOutlinedIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>

                  </Box>
                </Card>
              );
            })}
          </Stack>

        </Box>
      </Box>
    </Box>
  );
}

export default Documents;