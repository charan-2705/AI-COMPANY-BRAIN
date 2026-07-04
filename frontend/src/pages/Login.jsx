import { useState } from "react";
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
    const response = await loginUser({
      email,
      password,
    });

    localStorage.setItem("token", response.data.access_token);

    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Login failed. Check email/password or backend.");
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        background: "#F8FAFC",
      }}
    >
      {/* Left Side: Professional Branding Panel */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 6,
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-20%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Line 71 Fix: Bundled alignItems inside sx explicitly */}
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", zIndex: 2 }}>
          <Box
            sx={{
              p: 0.8,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #0284C7 0%, #4F46E5 100%)",
              display: "flex",
            }}
          >
            <AutoAwesomeIcon sx={{ color: "#FFFFFF", fontSize: "20px" }} />
          </Box>
          <Typography variant="h6" fontWeight="800" sx={{ color: "#FFFFFF", letterSpacing: "-0.5px" }}>
            CortexAI
          </Typography>
        </Stack>

        <Box sx={{ maxWidth: "460px", zIndex: 2, mb: 8 }}>
          <Typography variant="h3" fontWeight="800" sx={{ color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-1px" }}>
            Enterprise knowledge, instantly accessible.
          </Typography>
          <Typography sx={{ color: "#94A3B8", mt: 2, fontSize: "16px", lineHeight: 1.6 }}>
            Connect your secure document repositories and securely chat with your company guidelines, policy books, and data layers.
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ color: "#475569", fontWeight: 500, zIndex: 2 }}>
          © 2026 CortexAI Technologies Inc. All security logs active.
        </Typography>
      </Box>

      {/* Right Side: Interactive Login Form Panel */}
      <Box
        sx={{
          flex: { xs: 1, md: 0.9, lg: 0.8 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, sm: 6 },
          background: "#F8FAFC",
        }}
      >
        <Card
          component="form"
          onSubmit={handleLogin}
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: { xs: 3, sm: 5 },
            borderRadius: "16px",
            background: "#FFFFFF",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" }, mb: 4, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="800" sx={{ color: "#0F172A", letterSpacing: "-1px" }}>
              CortexAI
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "14px", mt: 0.5 }}>
              Enterprise Knowledge Assistant
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" }, mb: 4 }}>
            <Typography variant="h5" fontWeight="800" sx={{ color: "#0F172A", letterSpacing: "-0.5px" }}>
              Sign In
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "14px", mt: 0.5, fontWeight: 500 }}>
              Enter your credentials to access your organization workspace.
            </Typography>
          </Box>

          <Stack spacing={2.5}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ ...inputFieldStyle }}
            />

            <Box>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{ color: "#94A3B8" }}
                        >
                          {showPassword ? <VisibilityOff sx={{ fontSize: 20 }} /> : <Visibility sx={{ fontSize: 20 }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                }}
                sx={{ ...inputFieldStyle }}
              />
              
              {/* Line 188 Fix: Moved direct display attributes safely inside sx container */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    fontSize: 13,
                    color: "#4F46E5",
                    fontWeight: 600,
                    "&:hover": { color: "#3730A3" },
                  }}
                >
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
              fontSize: "15px",
              background: "linear-gradient(135deg, #0284C7 0%, #4F46E5 100%)",
              boxShadow: "0 4px 12px rgba(79, 70, 229, 0.15)",
              "&:hover": {
                background: "linear-gradient(135deg, #0369A1 0%, #3730A3 100%)",
                boxShadow: "0 6px 16px rgba(79, 70, 229, 0.2)",
              },
            }}
          >
            Sign In
          </Button>

          <Divider
            sx={{
              my: 3,
              color: "#94A3B8",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              "&::before, &::after": { borderColor: "#E2E8F0" },
            }}
          >
            OR CONTINUE WITH
          </Divider>

          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<GoogleIcon sx={{ fontSize: "18px !important" }} />}
              variant="outlined"
              fullWidth
              sx={{ ...oauthButtonStyle }}
            >
              Google
            </Button>

            <Button
              startIcon={<MicrosoftIcon sx={{ fontSize: "16px !important" }} />}
              variant="outlined"
              fullWidth
              sx={{ ...oauthButtonStyle }}
            >
              Microsoft
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}

const inputFieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    background: "#F8FAFC",
    color: "#0F172A",
    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.08)" },
    "&:hover fieldset": { borderColor: "rgba(0, 0, 0, 0.15)" },
    "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
  },
  "& .MuiInputLabel-root": {
    color: "#64748B",
    "&.Mui-focused": { color: "#4F46E5" },
  },
};

const oauthButtonStyle = {
  py: 1.2,
  borderRadius: "10px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "14px",
  color: "#334155",
  borderColor: "rgba(0, 0, 0, 0.08)",
  background: "#FFFFFF",
  transition: "all 0.15s ease-in-out",
  "&:hover": {
    borderColor: "rgba(0, 0, 0, 0.15)",
    background: "#F8FAFC",
  },
};

export default Login;