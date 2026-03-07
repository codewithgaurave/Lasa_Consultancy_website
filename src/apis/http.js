import axios from "axios";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://lasa-consultancy-api.onrender.com";

const http = axios.create({
  baseURL: VITE_API_BASE_URL,
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
