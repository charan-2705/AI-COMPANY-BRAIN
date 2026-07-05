import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Link,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  console.log("Register clicked");
  console.log(formData);

  try {
    const response = await registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    console.log(response);

    alert("Registration Successful!");

    navigate("/login");
  } catch (err) {
    console.error(err);

    if (err.response) {
      console.log(err.response.data);
      alert(JSON.stringify(err.response.data));
    } else {
      alert(err.message);
    }
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
          background: "linear-gradient(135deg,#0F172A 0%,#1E293B 100%)",
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Box sx={{ p: 0.8, borderRadius: "8px", background: "linear-gradient(135deg,#0284C7 0%,#4F46E5 100%)" }}>
            <AutoAwesomeIcon sx={{ color: "#fff" }} />
          </Box>

          <Typography variant="h6" fontWeight="800" color="white">
            CortexAI
          </Typography>
        </Stack>

        <Box sx={{ maxWidth: 450 }}>
          <Typography variant="h3" fontWeight="800" color="white" sx={{ lineHeight: 1.2 }}>
            Create your account.
          </Typography>

          <Typography sx={{ color: "#94A3B8", mt: 2 }}>
            Join your organization and access your enterprise knowledge assistant.
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ color: "#64748B" }}>
          © 2026 CortexAI Technologies Inc.
        </Typography>
      </Box>

      <Box sx={{ flex: { xs: 1, md: 0.9 }, display: "flex", justifyContent: "center", alignItems: "center", p: 5 }}>
        <Card
          component="form"
          onSubmit={handleRegister}
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 430,
            p: 5,
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h5" fontWeight="800">
            Register
          </Typography>

          <Typography sx={{ color: "#64748B", mb: 4 }}>
            Create your account to continue.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Full Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Email Address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
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

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg,#0284C7 0%,#4F46E5 100%)",
            }}
          >
            Register
          </Button>

          <Typography sx={{ mt: 3, textAlign: "center", color: "#64748B" }}>
            Already have an account?{" "}
            <Link component={RouterLink} to="/login" sx={{ color: "#4F46E5", fontWeight: 700 }}>
              Login
            </Link>
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default Register;