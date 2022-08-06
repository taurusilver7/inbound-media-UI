// induvidual post component cards in Result wrapper component. The Result is embedded into the Post component (The middle grid.)

import React, { useState } from "react";
import "./Post.css";

import Comment from "../../img/comment.png";
import NotLike from "../../img/notlike.png";
import Like from "../../img/like.png";
import Share from "../../img/share.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/post";

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = () => {
    likePost(post._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="post">
      {post.image && (
        <img
          className="postImg"
          src={
            post?.image ? process.env.REACT_APP_PUBLIC_FOLDER + post?.image : ""
          }
          alt=""
        />
      )}

      <div className="postButtons">
        <img
          onClick={handleLike}
          src={liked ? Like : NotLike}
          style={{ cursor: "pointer" }}
          alt="like_button"
        />
        <img src={Comment} alt="comment_button" />
        <img src={Share} alt="share_button" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>{post?.desc}</span>
      </div>
    </div>
  );
};

export default Post;
