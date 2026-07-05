import { useState } from "react";
import { 
  Box, 
  Card, 
  Stack, 
  TextField, 
  IconButton, 
  Typography, 
  Avatar, 
  InputAdornment 
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; // Fixed Vite build token
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { sendMessage } from "../services/chatService";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "ai", text: "Hello! I am connected to your enterprise knowledge base. Ask me anything about your loaded policy guidelines or company datasets." },
    { id: 2, sender: "user", text: "What is our standard remote work policy?" },
    { id: 3, sender: "ai", text: "According to the HR_Policy.pdf, core collaboration windows run from 10 AM to 4 PM local time. Employees are eligible for full-remote or hybrid structural tracks depending on department management validation." }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async (e) => {
  e.preventDefault();

  if (!input.trim()) return;

  const userText = input;

  const userMsg = {
    id: Date.now(),
    sender: "user",
    text: userText,
  };

  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  try {
    const response = await sendMessage(userText);

    const aiMsg = {
      id: Date.now() + 1,
      sender: "ai",
      text: `${response.data.answer}\n\n📄 Source: ${response.data.source}`,
    };

    setMessages((prev) => [...prev, aiMsg]);
  } catch (error) {
    console.error(error);

    const errorMsg = {
      id: Date.now() + 1,
      sender: "ai",
      text: "Sorry, I could not get a response from the server.",
    };

    setMessages((prev) => [...prev, errorMsg]);
  }
};

  return (
    <Box sx={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Box sx={{ display: "flex", flex: 1, width: "100%" }}>
        <Sidebar />

        {/* Dedicated Chat Shell Layout */}
        <Box 
          sx={{ 
            flex: 1, 
            display: "flex", 
            flexDirection: "column", 
            height: "calc(100vh - 64px)", // Offset standard top bar height offset
            position: "relative" 
          }}
        >
          {/* Active Knowledge Indicator Context Bar */}
          <Box 
            sx={{ 
              px: 4, 
              py: 2, 
              background: "#FFFFFF", 
              borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box sx={{ color: "#4F46E5", display: "flex" }}>
                <AutoAwesomeIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight="700" sx={{ color: "#0F172A" }}>
                  Institutional Index Session
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 500 }}>
                  Active context: 3 Knowledge Files Loaded
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Dynamic Scrollable Message Stage */}
          <Box 
            sx={{ 
              flex: 1, 
              overflowY: "auto", 
              p: 4, 
              display: "flex", 
              flexDirection: "column",
              gap: 3,
              background: "#F8FAFC"
            }}
          >
            {messages.map((msg) => {
              const isAI = msg.sender === "ai";
              return (
                <Stack 
                  key={msg.id}
                  direction="row" 
                  spacing={2} 
                  alignItems="flex-start"
                  sx={{ 
                    maxWidth: "800px", 
                    alignSelf: isAI ? "flex-start" : "flex-end",
                    flexDirection: isAI ? "row" : "row-reverse"
                  }}
                >
                  {/* Styled Avatar Node */}
                  <Avatar 
                    sx={{ 
                      bgcolor: isAI ? "rgba(79, 70, 229, 0.08)" : "rgba(15, 23, 42, 0.05)", 
                      color: isAI ? "#4F46E5" : "#0F172A",
                      border: isAI ? "1px solid rgba(79, 70, 229, 0.15)" : "1px solid rgba(0, 0, 0, 0.05)",
                      width: 36,
                      height: 36
                    }}
                  >
                    {isAI ? <SmartToyOutlinedIcon sx={{ fontSize: 20 }} /> : <PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />}
                  </Avatar>

                  {/* Message Bubble Block */}
                  <Card
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: isAI ? "0px 16px 16px 16px" : "16px 0px 16px 16px",
                      background: isAI ? "#FFFFFF" : "linear-gradient(135deg, #0284C7 0%, #4F46E5 100%)",
                      color: isAI ? "#334155" : "#FFFFFF",
                      border: isAI ? "1px solid rgba(0, 0, 0, 0.04)" : "none",
                      boxShadow: isAI ? "0 2px 4px rgba(0,0,0,0.01)" : "0 4px 12px rgba(79, 70, 229, 0.15)",
                    }}
                  >
                    <Typography sx={{ fontSize: "14.5px", lineHeight: 1.5, fontWeight: 500 }}>
                      {msg.text}
                    </Typography>
                  </Card>
                </Stack>
              );
            })}
          </Box>

          {/* Interactive Fixed Control Input Dock */}
          <Box 
            component="form"
            onSubmit={handleSendMessage}
            sx={{ 
              p: 3, 
              background: "#FFFFFF", 
              borderTop: "1px solid rgba(0, 0, 0, 0.05)" 
            }}
          >
            <Box sx={{ maxWidth: "900px", margin: "0 auto" }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Query your infrastructure metrics or documentation details..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton size="small" sx={{ color: "#94A3B8" }}>
                          <AttachFileOutlinedIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          type="submit"
                          disabled={!input.trim()}
                          sx={{ 
                            bgcolor: input.trim() ? "#4F46E5" : "transparent", 
                            color: input.trim() ? "#FFFFFF" : "#94A3B8",
                            "&:hover": { bgcolor: "#3730A3", color: "#FFFFFF" },
                            transition: "all 0.15s ease",
                            p: 1
                          }}
                        >
                          <SendRoundedIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    background: "#F8FAFC",
                    pr: 1, // Space compression padding tweak
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.06)" },
                    "&:hover fieldset": { borderColor: "rgba(0, 0, 0, 0.12)" },
                    "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                  }
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