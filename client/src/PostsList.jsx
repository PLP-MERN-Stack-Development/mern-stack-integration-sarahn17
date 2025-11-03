import React, { useState } from "react";
import axios from "axios";

const PostsList = ({ posts, fetchPosts }) => {
  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editImage, setEditImage] = useState("");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (post) => {
    setEditPostId(post._id);
    setEditTitle(post.title);
    setEditContent(post.content);
    setEditImage(post.image || "");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/posts/${editPostId}`, {
        title: editTitle,
        content: editContent,
        image: editImage,
      });
      setEditPostId(null);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          {editPostId === post._id ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                required
              ></textarea>
              <input
                type="text"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
              />
              <button type="submit">Update</button>
              <button type="button" onClick={() => setEditPostId(null)}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt={post.title} />}
              <button className="edit-btn" onClick={() => handleEdit(post)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(post._id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsList;
