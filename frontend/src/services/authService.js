import api from "./api";

export const loginUser = async (data) => {
  return await api.post("/api/auth/login", data);
};

export const registerUser = async (data) => {
  return await api.post("/api/auth/register", data);
};