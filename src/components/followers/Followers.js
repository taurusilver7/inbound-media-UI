import React from "react";
import "./Followers.css";
import { FollowersData } from "../../data/FollowersData";

const Followers = () => {
  return (
    <div className="followers">
      <h3>Who's following you</h3>

      {FollowersData.map((follower, id) => (
        <div key={id} className="follower">
          <div className="followerInfo">
            <img
              className="followerImg"
              src={follower.img}
              alt={follower.name}
            />
            <div className="followerDetail">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className="button fc-button">follow</button>
        </div>
      ))}
    </div>
  );
};

export default Followers;
