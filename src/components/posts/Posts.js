// The wrapper component that lies beneath the upload component in results center section (middle grid).

import React from "react";
import "./Posts.css";
import { PostData } from "../../data/PostData";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      {PostData.map((post, id) => (
        <Post post={post} key={id} />
      ))}
    </div>
  );
};

export default Posts;
