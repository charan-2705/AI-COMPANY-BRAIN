import api from "./api";

export const uploadDocument = async (formData) => {
  return await api.post("/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};