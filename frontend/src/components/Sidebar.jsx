import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "calc(100vh - 64px)",
        background: "#111A3A",
        color: "white",
        p: 3,
      }}
    >
      <Stack spacing={2}>
        <Button color="inherit" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>

        <Button color="inherit" onClick={() => navigate("/upload")}>
          Upload
        </Button>

        <Button color="inherit" onClick={() => navigate("/chat")}>
          Chat
        </Button>

        <Button color="inherit" onClick={() => navigate("/documents")}>
          Documents
        </Button>
      </Stack>
    </Box>
  );
}

export default Sidebar;