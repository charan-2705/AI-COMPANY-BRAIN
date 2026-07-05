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
  const cards = [
    {
      title: "Documents Base",
      value: "0",
      color: "#0284C7",
      icon: <DescriptionIcon sx={{ color: "#0284C7" }} />,
      trend: "No documents uploaded",
    },
    {
      title: "AI Chats Active",
      value: "0",
      color: "#4F46E5",
      icon: <ChatBubbleIcon sx={{ color: "#4F46E5" }} />,
      trend: "No active chats",
    },
    {
      title: "Storage Used",
      value: "0 MB",
      color: "#10B981",
      icon: <StorageIcon sx={{ color: "#10B981" }} />,
      trend: "No storage used",
    },
    {
      title: "Authorized Users",
      value: "1",
      color: "#F59E0B",
      icon: <GroupIcon sx={{ color: "#F59E0B" }} />,
      trend: "Current user",
    },
  ];

  const activities = [];

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A" }}>
      <Navbar />

      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, maxWidth: "1600px", margin: "0 auto" }}>
          <Box mb={4}>
            <Typography variant="h4" fontWeight="800">
              Analytics Overview
            </Typography>
            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "14px", fontWeight: 500 }}>
              Monitor and manage your enterprise AI document interaction streams.
            </Typography>
          </Box>

          <Grid container spacing={3} mb={4}>
            {cards.map((card, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 600 }}>
                        {card.title}
                      </Typography>

                      <Box
                        sx={{
                          p: 1,
                          borderRadius: "10px",
                          background: `${card.color}0A`,
                          display: "flex",
                          border: `1px solid ${card.color}15`,
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Stack>

                    <Typography variant="h3" fontWeight="700" sx={{ mt: 1.5, mb: 0.8 }}>
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

          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5}>
              <Typography variant="h6" fontWeight="700">
                Recent System Activity
              </Typography>

              <Chip
                label="Live Feed"
                size="small"
                sx={{
                  background: "rgba(16,185,129,0.08)",
                  color: "#10B981",
                  fontWeight: 700,
                  fontSize: "11px",
                  border: "1px solid rgba(16,185,129,0.15)",
                }}
              />
            </Box>

            {activities.length === 0 ? (
              <Box sx={{ py: 5, textAlign: "center" }}>
                <Typography sx={{ color: "#94A3B8", fontSize: "15px", fontWeight: 500 }}>
                  No recent activity.
                </Typography>
              </Box>
            ) : (
              <List disablePadding>
                {activities.map((activity, idx) => (
                  <ListItem key={idx} disableGutters>
                    <ListItemIcon sx={{ minWidth: 44 }}>{activity.icon}</ListItemIcon>
                    <ListItemText primary={activity.text} secondary={activity.time} />
                    <Chip label={activity.type} size="small" variant="outlined" />
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