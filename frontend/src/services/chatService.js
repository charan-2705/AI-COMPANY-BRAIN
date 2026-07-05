import api from "./api";

export const sendMessage = async (question) => {
  return await api.post("/api/chat/", {
    question: question,
  });
};