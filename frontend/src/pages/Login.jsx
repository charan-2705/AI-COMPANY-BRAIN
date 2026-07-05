import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.data.access_token);
      navigate("/chat");
    } catch (error) {
      console.error(error);
      alert("Login failed. Check email/password.");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", display: "flex", background: "#F8FAFC" }}>
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 6,
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Box sx={{ p: 0.8, borderRadius: "8px", background: "linear-gradient(135deg, #0284C7 0%, #4F46E5 100%)", display: "flex" }}>
            <AutoAwesomeIcon sx={{ color: "#FFFFFF", fontSize: "20px" }} />
          </Box>

          <Typography variant="h6" fontWeight="800" sx={{ color: "#FFFFFF" }}>
            CortexAI
          </Typography>
        </Stack>

        <Box sx={{ maxWidth: "460px" }}>
          <Typography variant="h3" fontWeight="800" sx={{ color: "#FFFFFF", lineHeight: 1.2 }}>
            Enterprise knowledge, instantly accessible.
          </Typography>

          <Typography sx={{ color: "#94A3B8", mt: 2, fontSize: "16px", lineHeight: 1.6 }}>
            Securely chat with your company guidelines, policy books, and documents.
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ color: "#475569" }}>
          © 2026 CortexAI Technologies Inc.
        </Typography>
      </Box>

      <Box sx={{ flex: { xs: 1, md: 0.9 }, display: "flex", justifyContent: "center", alignItems: "center", p: 5 }}>
        <Card
          component="form"
          onSubmit={handleLogin}
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: 5,
            borderRadius: "16px",
            background: "#FFFFFF",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h5" fontWeight="800">
            Sign In
          </Typography>

          <Typography sx={{ color: "#64748B", mb: 4 }}>
            Enter your credentials to access your workspace.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Email Address"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Box>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Typography sx={{ fontSize: 13, color: "#64748B" }}>
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/register" sx={{ color: "#4F46E5", fontWeight: 700 }}>
                    Register
                  </Link>
                </Typography>

                <Link href="#" sx={{ fontSize: 13, color: "#4F46E5", fontWeight: 600 }}>
                  Forgot Password?
                </Link>
              </Box>
            </Box>
          </Stack>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.4,
              borderRadius: "10px",
              fontWeight: 700,
              textTransform: "none",
              background: "linear-gradient(135deg, #0284C7 0%, #4F46E5 100%)",
            }}
          >
            Sign In
          </Button>

          <Divider sx={{ my: 3 }}>OR CONTINUE WITH</Divider>

          <Stack direction="row" spacing={2}>
            <Button startIcon={<GoogleIcon />} variant="outlined" fullWidth>
              Google
            </Button>

            <Button startIcon={<MicrosoftIcon />} variant="outlined" fullWidth>
              Microsoft
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}

export default Login;