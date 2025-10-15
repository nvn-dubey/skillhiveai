import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDescription() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("/api/posts").then(res => {
      const p = res.data.find(item => item.id === id);
      setPost(p);
    });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Service: {post.service}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}
