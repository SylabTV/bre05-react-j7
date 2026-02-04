import { useState, useEffect } from "react";
import PostCard from "./PostCard.jsx";
import data from "./data.js";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <div className="blog-grid">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} showPost={props.showPost} />
      ))}
    </div>
  );
};

export default Blog;
