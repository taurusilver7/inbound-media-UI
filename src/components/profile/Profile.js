import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import Search from "../search/Search";
import "./Profile.css"

const Profile = () => {
  return <div className="profile">
    <Search />
    <Card />
    <Followers />
  </div>;
};

export default Profile;
