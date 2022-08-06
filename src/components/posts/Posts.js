// The wrapper component that lies beneath the upload component in results center section (middle grid).

import React, { useEffect } from "react";
import "./Posts.css";
// import { PostData } from "../../data/PostData";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/post";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  console.log(posts);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [dispatch, user]);

  return (
    <div className="posts">
      {loading
        ? "Loading.."
        : posts?.map((post, id) => <Post post={post} key={id} />)}
    </div>
  );
};

export default Posts;
