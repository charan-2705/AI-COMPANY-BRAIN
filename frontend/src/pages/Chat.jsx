import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Chat() {
  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex", width: "100vw", minHeight: "100vh", background: "#F5F7FB" }}>
    
        <Sidebar />

        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold" mb={1}>
            AI Chat
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Ask questions from uploaded company documents.
          </Typography>

          <Card sx={{ p: 3, borderRadius: 3, mb: 3 }}>
            <Typography fontWeight="bold">You:</Typography>
            <Typography>What is the leave policy?</Typography>
          </Card>

          <Card sx={{ p: 3, borderRadius: 3, mb: 3 }}>
            <Typography fontWeight="bold">CortexAI:</Typography>
            <Typography mt={1}>
              Employees are allowed to apply for leave according to company HR policy.
            </Typography>
            <Typography mt={2} color="primary">
              Source: HR_Policy.pdf
            </Typography>
          </Card>

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField fullWidth placeholder="Ask something..." />
            <Button variant="contained">Send</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Chat;