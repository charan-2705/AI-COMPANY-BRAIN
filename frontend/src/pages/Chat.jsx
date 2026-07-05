import { useState } from "react";
import {
  Box,
  Card,
  Stack,
  TextField,
  IconButton,
  Typography,
  Avatar,
  InputAdornment,
} from "@mui/material";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { sendMessage } from "../services/chatService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hey, how can I help you?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: userText,
      },
    ]);

    setInput("");

    try {
      const response = await sendMessage(userText);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: response.data.source
            ? `${response.data.answer}\n\n📄 Source: ${response.data.source}`
            : response.data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "Sorry, I could not get a response from the server.",
        },
      ]);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Box sx={{ display: "flex", flex: 1, width: "100%" }}>
        <Sidebar />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "calc(100vh - 64px)" }}>
          {/* Professional Minimal Header Section */}
          <Box sx={{ px: 4, py: 2, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "6px", background: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                <AutoAwesomeIcon sx={{ fontSize: 16, color: "#475569" }} />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#0F172A", letterSpacing: "-0.01em" }}>
                  Institutional Index Session
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 500, display: "flex", alignItems: "center", gap: 1 }}>
                  <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#10B981", display: "inline-block" }} />
                  Ready to answer from uploaded knowledge files
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Structured Corporate Message Board Layout */}
          <Box sx={{ flex: 1, overflowY: "auto", px: 4, py: 4, display: "flex", flexDirection: "column", gap: 3, background: "#F8FAFC" }}>
            {messages.map((msg) => {
              const isAI = msg.sender === "ai";

              return (
                <Stack
                  key={msg.id}
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                  sx={{
                    maxWidth: "850px",
                    alignSelf: isAI ? "flex-start" : "flex-end",
                    flexDirection: isAI ? "row" : "row-reverse",
                    width: "100%",
                  }}
                >
                  <Avatar
                    sx={{
                      background: isAI ? "#FFFFFF" : "#475569",
                      color: isAI ? "#475569" : "#FFFFFF",
                      width: 34,
                      height: 34,
                      fontSize: "14px",
                      border: "1px solid #E2E8F0"
                    }}
                  >
                    {isAI ? <SmartToyOutlinedIcon sx={{ fontSize: 18 }} /> : <PersonOutlineOutlinedIcon sx={{ fontSize: 18 }} />}
                  </Avatar>

                  <Card
                    elevation={0}
                    sx={{
                      p: 2,
                      px: 2.5,
                      borderRadius: "8px",
                      background: isAI ? "#FFFFFF" : "#1E293B",
                      color: isAI ? "#334155" : "#FFFFFF",
                      whiteSpace: "pre-line",
                      border: isAI ? "1px solid #E2E8F0" : "1px solid #0F172A",
                      maxWidth: "calc(100% - 50px)",
                      boxShadow: isAI ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none"
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", lineHeight: 1.55, fontWeight: isAI ? 400 : 500 }}>
                      {msg.text}
                    </Typography>
                  </Card>
                </Stack>
              );
            })}
          </Box>

          {/* Clean Executive Console Input Bar */}
          <Box component="form" onSubmit={handleSendMessage} sx={{ p: 3, background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
            <Box sx={{ maxWidth: "900px", margin: "0 auto" }}>
              <TextField
                fullWidth
                placeholder="Ask anything from your uploaded documents..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    transition: "all 0.15s ease-in-out",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    "& fieldset": {
                      borderColor: "#E2E8F0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#CBD5E1",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0F172A",
                      borderWidth: "1px"
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton size="small" sx={{ color: "#94A3B8", borderRadius: "6px", "&:hover": { color: "#475569", background: "#F1F5F9" } }}>
                        <AttachFileOutlinedIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton 
                        type="submit" 
                        disabled={!input.trim()}
                        sx={{ 
                          bgcolor: input.trim() ? "#0F172A" : "transparent", 
                          color: input.trim() ? "#FFFFFF" : "#CBD5E1",
                          borderRadius: "6px",
                          p: "8px",
                          transition: "all 0.15s ease",
                          "&:hover": { 
                            bgcolor: input.trim() ? "#1E293B" : "transparent",
                          },
                          "&.Mui-disabled": {
                            color: "#E2E8F0",
                            background: "transparent"
                          }
                        }}
                      >
                        <SendRoundedIcon sx={{ fontSize: 15 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;