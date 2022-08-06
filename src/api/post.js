import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

export const createPost = (data) => API.post("/post", data);

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);

export const likePost = (id, userId) => API.put(`/post/${id}/like`, { userId });
