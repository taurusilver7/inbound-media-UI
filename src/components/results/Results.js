import React from "react";
import Posts from "../posts/Posts";
import Upload from "../upload/Upload";
import "./Results.css";

const Results = () => {
  return (
    <div className="results">
      {/* Upload top component */}
      <Upload />

      {/* Posts results display component wrapping around induvidual post component */}
      <Posts />
    </div>
  );
};

export default Results;
