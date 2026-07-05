import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import StorageIcon from "@mui/icons-material/Storage";
import GroupIcon from "@mui/icons-material/Group";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const username = localStorage.getItem("username") || "User";
  const cards = [
    {
      title: "Documents Base",
      value: "0",
      color: "#0284C7",
      icon: <DescriptionIcon sx={{ fontSize: 18, color: "#475569" }} />,
      trend: "No documents uploaded",
    },
    {
      title: "AI Chats Active",
      value: "0",
      color: "#4F46E5",
      icon: <ChatBubbleIcon sx={{ fontSize: 18, color: "#475569" }} />,
      trend: "No active chats",
    },
    {
      title: "Storage Used",
      value: "0 MB",
      color: "#10B981",
      icon: <StorageIcon sx={{ fontSize: 18, color: "#475569" }} />,
      trend: "No storage used",
    },
    {
      title: "Authorized Users",
      value: "1",
      color: "#F59E0B",
      icon: <GroupIcon sx={{ fontSize: 18, color: "#475569" }} />,
      trend: "Current user",
    },
  ];

  const activities = [];

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Box sx={{ display: "flex", flex: 1, width: "100%" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: { xs: 4, md: 5 }, maxWidth: "1600px", margin: "0 auto", width: "100%" }}>
          
          {/* Header Dashboard Block */}
          <Box mb={4.5}>
            <Typography variant="h5" sx={{ fontWeight: "700", color: "#0F172A", letterSpacing: "-0.02em" }}>
              Welcome, {username} 👋
            </Typography>
            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "13.5px", fontWeight: 500 }}>
              Monitor and manage your enterprise AI document interaction streams.
            </Typography>
          </Box>

          {/* Grid Metric Cards Container */}
          <Grid container spacing={3} mb={4.5}>
            {cards.map((card, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "8px",
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
                    transition: "all 0.15s ease-in-out",
                    "&:hover": {
                      borderColor: "#CBD5E1",
                      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.02)"
                    }
                  }}
                >
                  <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography sx={{ color: "#64748B", fontSize: "13px", fontWeight: "600", letterSpacing: "0.01em" }}>
                        {card.title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: "6px",
                          background: "#F1F5F9",
                          border: "1px solid #E2E8F0"
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Stack>

                    <Typography variant="h4" sx={{ fontWeight: "700", color: "#0F172A", mt: 2, mb: 0.5, letterSpacing: "-0.02em" }}>
                      {card.value}
                    </Typography>

                    <Typography sx={{ color: "#94A3B8", fontSize: "12px", fontWeight: 500 }}>
                      {card.trend}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Activity Section Layout */}
          <Card
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "8px",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: "700", color: "#0F172A" }}>
                Recent System Activity
              </Typography>

              <Chip
                label="Live Feed"
                size="small"
                sx={{
                  background: "#F0FDF4",
                  color: "#16A34A",
                  fontWeight: 600,
                  fontSize: "11px",
                  border: "1px solid #DCFCE7",
                  height: "24px",
                  "& .MuiChip-label": {
                    px: 1.2,
                  },
                  "&::before": {
                    content: '""',
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#16A34A",
                    marginRight: "6px",
                    animation: "pulse 2s infinite ease-in-out",
                  },
                  "@keyframes pulse": {
                    "0%": { opacity: 0.4 },
                    "50%": { opacity: 1 },
                    "100%": { opacity: 0.4 },
                  }
                }}
              />
            </Box>

            {activities.length === 0 ? (
              <Box 
                sx={{ 
                  py: 6, 
                  textAlign: "center", 
                  background: "#F8FAFC", 
                  borderRadius: "6px", 
                  border: "1px dashed #E2E8F0" 
                }}
              >
                <Typography sx={{ color: "#64748B", fontSize: "13.5px", fontWeight: 500 }}>
                  No ongoing workspace activities recorded
                </Typography>
              </Box>
            ) : (
              <List disablePadding>
                {activities.map((activity, idx) => (
                  <ListItem 
                    key={idx} 
                    disableGutters 
                    sx={{ 
                      py: 1.75, 
                      px: 2,
                      borderBottom: idx !== activities.length - 1 ? "1px solid #F1F5F9" : "none",
                      "&:hover": { bgcolor: "#F8FAFC" }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: "#475569" }}>{activity.icon}</ListItemIcon>
                    <ListItemText 
                      primary={activity.text} 
                      secondary={activity.time} 
                      primaryTypographyProps={{ sx: { fontSize: "14px", fontWeight: 500, color: "#334155" } }}
                      secondaryTypographyProps={{ sx: { fontSize: "12px", color: "#94A3B8", mt: 0.25 } }}
                    />
                    <Chip 
                      label={activity.type} 
                      size="small" 
                      variant="outlined" 
                      sx={{ borderRadius: "4px", fontSize: "11px", fontWeight: 500, color: "#64748B", borderColor: "#E2E8F0" }} 
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;