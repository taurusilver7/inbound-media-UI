import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import Search from "../search/Search";
import "./User.css";

const User = () => {
  return (
    <div className="user">
      {/* Top : logo & searchbar */}
      <Search />

      {/* User profile Card: img, details, followers count */}
      <Card location={"home"} />

      {/* followers + details */}
      <Followers />
    </div>
  );
};

export default User;
