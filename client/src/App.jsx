import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "./CreatePost.jsx";
import PostsList from "./PostsList.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>My MERN Blog</h1>
      <CreatePost fetchPosts={fetchPosts} />
      <PostsList posts={posts} fetchPosts={fetchPosts} />
    </div>
  );
};

export default App;

