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
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined"; // Fixed safe import string name

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const cards = [
    {
      title: "Documents Base",
      value: "12",
      color: "#0284C7", // Premium Deep Blue
      icon: <DescriptionIcon sx={{ color: "#0284C7" }} />,
      trend: "+2 new today",
    },
    {
      title: "AI Chats Active",
      value: "38",
      color: "#4F46E5", // Electric Indigo
      icon: <ChatBubbleIcon sx={{ color: "#4F46E5" }} />,
      trend: "14 active sessions",
    },
    {
      title: "Storage Used",
      value: "2.1 GB",
      color: "#10B981", // Emerald Green
      icon: <StorageIcon sx={{ color: "#10B981" }} />,
      trend: "Of 10 GB limit",
    },
    {
      title: "Authorized Users",
      value: "8",
      color: "#F59E0B", // Amber Orange
      icon: <GroupIcon sx={{ color: "#F59E0B" }} />,
      trend: "3 online now",
    },
  ];

  const activities = [
    {
      text: "HR_Policy.pdf uploaded successfully",
      time: "10 mins ago",
      icon: <ArticleOutlinedIcon sx={{ color: "#0284C7" }} />,
      type: "Upload",
    },
    {
      text: 'AI generated response to "What is the leave policy?"',
      time: "1 hour ago",
      icon: <SmartToyOutlinedIcon sx={{ color: "#4F46E5" }} />,
      type: "AI Chat",
    },
    {
      text: "Employee_Handbook.pdf indexed successfully into embeddings vectors",
      time: "3 hours ago",
      icon: <CheckCircleOutlinedIcon sx={{ color: "#10B981" }} />,
      type: "System",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A" }}>
      <Navbar />

      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar />

        {/* Core Main Content Area Layout */}
        <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, maxWidth: "1600px", margin: "0 auto" }}>
          
          {/* Main Dashboard Header Text Blocks */}
          <Box mb={4}>
            <Typography variant="h4" fontWeight="800" sx={{ color: "#0F172A", letterSpacing: "-0.6px" }}>
              Analytics Overview
            </Typography>
            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "14px", fontWeight: 500 }}>
              Monitor and manage your enterprise AI document interaction streams.
            </Typography>
          </Box>

          {/* Metric KPI Deck Grid */}
          <Grid container spacing={3} mb={4}>
            {cards.map((card, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)",
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 20px -3px rgba(0, 0, 0, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.1px" }}>
                        {card.title}
                      </Typography>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: "10px",
                          background: `${card.color}0A`, // Ultra soft colored background container
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `1px solid ${card.color}15`,
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Stack>

                    <Typography variant="h3" fontWeight="700" sx={{ mt: 1.5, mb: 0.8, color: "#0F172A", letterSpacing: "-1.5px" }}>
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

          {/* Activity Logs Component Segment */}
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              background: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5}>
              <Typography variant="h6" fontWeight="700" sx={{ color: "#0F172A", letterSpacing: "-0.3px" }}>
                Recent System Activity
              </Typography>
              <Chip 
                label="Live Feed" 
                size="small" 
                sx={{ 
                  background: "rgba(16, 185, 129, 0.08)", 
                  color: "#10B981", 
                  fontWeight: 700,
                  fontSize: "11px",
                  border: "1px solid rgba(16, 185, 129, 0.15)"
                }} 
              />
            </Box>

            <List disablePadding>
              {activities.map((activity, idx) => (
                <ListItem
                  key={idx}
                  disableGutters
                  sx={{
                    py: 1.8,
                    borderBottom: idx !== activities.length - 1 ? "1px solid rgba(0, 0, 0, 0.04)" : "none",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 44 }}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: "50%",
                        background: "#F8FAFC",
                        border: "1px solid rgba(0, 0, 0, 0.03)",
                        display: "flex",
                      }}
                    >
                      {activity.icon}
                    </Box>
                  </ListItemIcon>
                  
                  <ListItemText
                    primary={
                      <Typography sx={{ color: "#334155", fontSize: "14px", fontWeight: 550 }}>
                        {activity.text}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ color: "#94A3B8", fontSize: "12px", mt: 0.3, fontWeight: 500 }}>
                        {activity.time}
                      </Typography>
                    }
                  />

                  <Chip 
                    label={activity.type} 
                    size="small" 
                    variant="outlined"
                    sx={{ 
                      borderColor: "rgba(0, 0, 0, 0.08)", 
                      color: "#64748B",
                      fontSize: "11px",
                      fontWeight: 600,
                      height: "24px",
                      borderRadius: "6px",
                      display: { xs: "none", sm: "inline-flex" }
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;