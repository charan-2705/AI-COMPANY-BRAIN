import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#0B1026",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          CortexAI
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="body2">
          Enterprise Knowledge Assistant
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;