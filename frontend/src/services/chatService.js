import api from "./api";

export const sendMessage = async (message) => {
  return await api.post("/api/chat", {
    message,
  });
};