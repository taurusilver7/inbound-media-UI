// induvidual post component cards in Result wrapper component. The Result is embedded into the Post component (The middle grid.)

import React from "react";
import "./Post.css";

import Comment from "../../img/comment.png";
import NotLike from "../../img/notlike.png";
import Like from "../../img/like.png";
import Share from "../../img/share.png";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img className="postImg" src={post.img} alt={post.name} />

      <div className="postButtons">
        <img src={post.liked ? Like : NotLike} alt="like_button" />
        <img src={Comment} alt="comment_button" />
        <img src={Share} alt="share_button" />
      </div>

      <span style={{color: 'var(--gray)', fontSize: '12px'}}>{post.likes} likes</span>

      <div className="detail">
        <span>
          <b>{post.name}</b>
        </span>
        <span>{post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
