import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import EmailIcon from "@mui/icons-material/Email";

function Login() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(rgba(8,12,30,0.55), rgba(8,12,30,0.55)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        sx={{
          width: 430,
          p: 5,
          borderRadius: 4,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center">
          CortexAI
        </Typography>

        <Typography align="center" sx={{ color: "#607D8B", mb: 4, mt: 1 }}>
          Enterprise Knowledge Assistant
        </Typography>

        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Link href="#" underline="hover" sx={{ fontSize: 14 }}>
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/dashboard")}
          sx={{
            mt: 3,
            py: 1.4,
            borderRadius: 3,
            fontWeight: "bold",
            background: "#1565C0",
          }}
        >
          Login
        </Button>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <Stack spacing={2}>
          <Button startIcon={<GoogleIcon />} variant="outlined" fullWidth>
            Continue with Google
          </Button>

          <Button startIcon={<MicrosoftIcon />} variant="outlined" fullWidth>
            Continue with Microsoft
          </Button>

          <Button startIcon={<EmailIcon />} variant="outlined" fullWidth>
            Continue with Outlook
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default Login;