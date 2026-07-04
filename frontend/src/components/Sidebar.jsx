import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  LinearProgress,
} from "@mui/material";

import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 20 }} />, path: "/dashboard" },
    { text: "Upload Files", icon: <CloudUploadOutlinedIcon sx={{ fontSize: 20 }} />, path: "/upload" },
    { text: "AI Chat Assistant", icon: <ChatOutlinedIcon sx={{ fontSize: 20 }} />, path: "/chat" },
    { text: "Documents Base", icon: <FolderOpenOutlinedIcon sx={{ fontSize: 20 }} />, path: "/documents" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        width: 260,
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        borderRight: "1px solid rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        boxSizing: "border-box",
        position: "sticky",
        top: 64,
        height: "calc(100vh - 64px)",
      }}
    >
      <Box>
        <List component="nav" disablePadding>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <ListItemButton
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: "8px",
                  mb: 0.8,
                  py: 1.2,
                  px: 2,
                  color: isActive ? "#4F46E5" : "#475569",
                  background: isActive ? "rgba(79, 70, 229, 0.06)" : "transparent",
                  borderLeft: isActive ? "3px solid #4F46E5" : "3px solid transparent",
                  "&:hover": {
                    background: isActive ? "rgba(79, 70, 229, 0.08)" : "rgba(0, 0, 0, 0.02)",
                    color: isActive ? "#4F46E5" : "#0F172A",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "14px",
                    fontWeight: isActive ? 650 : 500,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      <Box>
        <Box
          sx={{
            p: 2,
            borderRadius: "12px",
            background: "#FFFFFF",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            mb: 1.5,
          }}
        >
          <Typography sx={{ color: "#64748B", fontSize: "12px", fontWeight: 600 }}>
            Local Storage Usage
          </Typography>

          <Typography sx={{ color: "#1E293B", fontSize: "14px", fontWeight: 700, mt: 0.5, mb: 1 }}>
            2.1 GB / 10 GB
          </Typography>

          <LinearProgress
            variant="determinate"
            value={21}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: "#E2E8F0",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(90deg, #3B82F6, #4F46E5)",
              },
            }}
          />
        </Box>

        <ListItemButton
          sx={{
            borderRadius: "8px",
            py: 1,
            color: "#64748B",
            "&:hover": {
              color: "#0F172A",
              background: "rgba(0,0,0,0.02)",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
            <HelpOutlineOutlinedIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>

          <ListItemText
            primary="Documentation"
            primaryTypographyProps={{ fontSize: "13px", fontWeight: 500 }}
          />
        </ListItemButton>

        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: "8px",
            py: 1,
            color: "#DC2626",
            "&:hover": {
              color: "#B91C1C",
              background: "rgba(220,38,38,0.06)",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
            <LogoutOutlinedIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>

          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: "13px", fontWeight: 600 }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default Sidebar;