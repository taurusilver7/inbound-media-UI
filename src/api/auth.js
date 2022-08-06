import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

export const login = (formData) => API.post("/auth/login", formData);
