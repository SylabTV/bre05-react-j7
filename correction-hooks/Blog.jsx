import { useState, useEffect } from "react";
import PostCard from "./PostCard.jsx";
import data from "./data.js";

const Blog = (props) => {
  // state de post et son etat initial
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // setpost modifie le state
    setPosts(data);
  }, []);

  return (
    // la grid
    <div className="blog-grid">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} showPost={props.showPost} />
      ))}
    </div>
  );
};

export default Blog;
