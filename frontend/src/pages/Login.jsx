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
import { GoogleLogin } from "@react-oauth/google";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const allowedEmailRegex =
    /^[^\s@]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com)$/i;

  if (!allowedEmailRegex.test(email)) {
    alert("Only Gmail or Microsoft email addresses are allowed.");
    return;
  }

    try {
  const response = await loginUser({ email, password });

  localStorage.setItem("token", response.data.access_token);

  if (response.data.user?.name) {
    localStorage.setItem("username", response.data.user.name);
  }

  navigate("/dashboard");
} catch (error) {
  console.error(error);
  alert("Login failed. Check email/password.");
}
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", display: "flex", background: "#F8FAFC", overflow: "hidden" }}>
      
      {/* Left Core Branding Showcase */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 6,
          background: "#0F172A",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundSize: "24px 24px",
            backgroundImage: "linear-gradient(to right, #64748B 1px, transparent 1px), linear-gradient(to bottom, #64748B 1px, transparent 1px)",
          }
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", zIndex: 1 }}>
          <Box sx={{ p: 0.75, borderRadius: "6px", background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", display: "flex" }}>
            <AutoAwesomeIcon sx={{ color: "#38BDF8", fontSize: "18px" }} />
          </Box>

          <Typography variant="subtitle1" sx={{ color: "#FFFFFF", fontWeight: "700", letterSpacing: "-0.01em" }}>
            CortexAI
          </Typography>
        </Stack>

        <Box sx={{ maxWidth: "480px", zIndex: 1 }}>
          <Typography variant="h4" sx={{ color: "#FFFFFF", fontWeight: "700", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            Enterprise knowledge, instantly accessible.
          </Typography>

          <Typography sx={{ color: "#94A3B8", mt: 1.5, fontSize: "14.5px", lineHeight: 1.6, fontWeight: 500 }}>
            Securely chat with your company guidelines, policy books, and documents.
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ color: "#475569", fontWeight: 500, zIndex: 1 }}>
          © 2026 CortexAI Technologies Inc.
        </Typography>
      </Box>

      {/* Right User Authentication Terminal */}
      <Box sx={{ flex: { xs: 1, md: 0.9 }, display: "flex", justifyContent: "center", alignItems: "center", p: { xs: 3, sm: 6 }, background: "#F8FAFC" }}>
        <Card
          component="form"
          onSubmit={handleLogin}
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: { xs: 4, sm: 5 },
            borderRadius: "8px",
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box mb={3.5}>
            <Typography variant="h5" sx={{ fontWeight: "700", color: "#0F172A", letterSpacing: "-0.02em" }}>
              Sign In
            </Typography>

            <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: "13.5px", fontWeight: 500 }}>
              Enter your credentials to access your workspace.
            </Typography>
          </Box>

          <Stack spacing={2.5}>
            <TextField
              label="Email Address"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ sx: { fontSize: "14px", color: "#64748B" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                  "& fieldset": { borderColor: "#E2E8F0" },
                  "&:hover fieldset": { borderColor: "#CBD5E1" },
                  "&.Mui-focused fieldset": { borderColor: "#0F172A", borderWidth: "1px" },
                },
              }}
            />

            <Box>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ sx: { fontSize: "14px", color: "#64748B" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: "14px",
                    "& fieldset": { borderColor: "#E2E8F0" },
                    "&:hover fieldset": { borderColor: "#CBD5E1" },
                    "&.Mui-focused fieldset": { borderColor: "#0F172A", borderWidth: "1px" },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="button" onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: "#94A3B8" }}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: 18 }} /> : <Visibility sx={{ fontSize: 18 }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1.25 }}>
                <Typography sx={{ fontSize: 12.5, color: "#64748B", fontWeight: 500 }}>
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/register" sx={{ color: "#0F172A", fontWeight: "600", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                    Register
                  </Link>
                </Typography>

                <Link href="#" sx={{ fontSize: 12.5, color: "#64748B", fontWeight: 500, textDecoration: "none", "&:hover": { color: "#0F172A" } }}>
                  Forgot Password?
                </Link>
              </Box>
            </Box>
          </Stack>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              mt: 3.5,
              py: 1.25,
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              background: "#0F172A",
              color: "#FFFFFF",
              "&:hover": {
                background: "#1E293B",
              },
            }}
          >
            Sign In
          </Button>

          <Divider sx={{ my: 3, "&::before, &::after": { borderColor: "#E2E8F0" }, fontSize: "11px", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.03em" }}>
            OR CONTINUE WITH
          </Divider>

          <Stack direction="row" spacing={2}>
            <GoogleLogin
  onSuccess={async (credentialResponse) => {
    try {
      const response = await api.post("/api/auth/google", {
        credential: credentialResponse.credential,
      });

      console.log("Google backend response:", response.data);

      localStorage.setItem("token", response.data.access_token);

      if (response.data.user?.name) {
        localStorage.setItem("username", response.data.user.name);
      }

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login backend failed");
    }
  }}
  onError={() => {
    alert("Google Login Failed");
  }}
/>
            <Button 
              startIcon={<MicrosoftIcon sx={{ fontSize: "16px !important" }} />} 
              variant="outlined" 
              fullWidth
              sx={{
                borderRadius: "8px",
                borderColor: "#E2E8F0",
                color: "#334155",
                fontSize: "13.5px",
                fontWeight: 500,
                textTransform: "none",
                py: 1,
                "&:hover": {
                  borderColor: "#CBD5E1",
                  background: "#F8FAFC"
                }
              }}
            >
              Microsoft
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}

export default Login;