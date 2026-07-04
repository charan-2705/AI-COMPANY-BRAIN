import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Documents() {
  const documents = [
    {
      name: "HR_Policy.pdf",
      date: "04 Jul 2026",
      status: "Indexed",
    },
    {
      name: "Leave_Policy.pdf",
      date: "03 Jul 2026",
      status: "Indexed",
    },
    {
      name: "Employee_Handbook.pdf",
      date: "01 Jul 2026",
      status: "Processing",
    },
  ];

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex", width: "100vw", minHeight: "100vh", background: "#F5F7FB" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Documents
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Manage all uploaded company documents.
          </Typography>

          <Stack spacing={3}>
            {documents.map((doc, index) => (
              <Card key={index} sx={{ borderRadius: 3 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <DescriptionIcon color="primary" />
                    <Box>
                      <Typography fontWeight="bold">
                        {doc.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Uploaded: {doc.date}
                      </Typography>

                      <Typography color="success.main">
                        {doc.status}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                    >
                      Download
                    </Button>

                    <Button
                      color="error"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Documents;