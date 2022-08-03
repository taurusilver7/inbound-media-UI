import React from "react";
import Upload from "../upload/Upload";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts">
      {/* Upload top component */}
      <Upload />
      {/* Posts results display component */}
    </div>
  );
};

export default Posts;
