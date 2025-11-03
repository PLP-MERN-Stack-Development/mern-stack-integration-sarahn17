import axios from "axios";

const api = axios.create({
  baseURL: "/api", // This works because of the proxy setting
});

// Fetch all posts
export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

// Fetch a single post
export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

// Create a new post
export const createPost = async (postData) => {
  const response = await api.post("/posts", postData);
  return response.data;
};

// Update a post
export const updatePost = async (id, postData) => {
  const response = await api.put(`/posts/${id}`, postData);
  return response.data;
};

// Delete a post
export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};
