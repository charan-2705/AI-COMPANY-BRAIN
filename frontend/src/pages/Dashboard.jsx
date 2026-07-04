import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const cards = [
    {
      title: "Documents",
      value: "12",
      color: "#00CFFF",
    },
    {
      title: "AI Chats",
      value: "38",
      color: "#7C3AED",
    },
    {
      title: "Storage Used",
      value: "2.1 GB",
      color: "#22C55E",
    },
    {
      title: "Users",
      value: "8",
      color: "#F59E0B",
    },
  ];

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex", width: "100vw", minHeight: "100vh", background: "#F5F7FB" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Dashboard
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Welcome to CortexAI Enterprise Knowledge Platform
          </Typography>

          <Grid container spacing={3}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    borderLeft: `6px solid ${card.color}`,
                  }}
                >
                  <CardContent>
                    <Typography color="text.secondary">
                      {card.title}
                    </Typography>

                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{ mt: 2 }}
                    >
                      {card.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Recent Activity
            </Typography>

            <Typography mt={2}>
              📄 HR_Policy.pdf uploaded
            </Typography>

            <Typography>
              🤖 AI answered "What is the leave policy?"
            </Typography>

            <Typography>
              📚 Employee_Handbook.pdf indexed successfully
            </Typography>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;