import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const loginUser = async (data) => {
  return await axios.post(`${API_BASE_URL}/api/auth/login`, data);
};

export const registerUser = async (data) => {
  return await axios.post(`${API_BASE_URL}/api/auth/register`, data);
};