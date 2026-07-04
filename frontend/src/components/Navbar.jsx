import { Box, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box 
      sx={{ 
        height: 64, 
        width: "100%", 
        bg: "#FFFFFF", 
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)", 
        display: "flex", 
        alignItems: "center", 
        px: 3,
        boxSizing: "border-box"
      }}
    >
      <Typography variant="h6" fontWeight="800" color="#0F172A">
        CortexAI Platform
      </Typography>
    </Box>
  );
}

export default Navbar;