import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import Search from "../search/Search";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      {/* Top : logo & searchbar */}
      <Search />

      {/* User profile Card: img, details, followers count */}
      <Card />

      {/* followers + details */}
      <Followers />
    </div>
  );
};

export default Profile;
