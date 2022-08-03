import React from "react";
import Card from "../card/Card";
import Search from "../search/Search";
import "./Profile.css"

const Profile = () => {
  return <div className="profile">
    <Search />
    <Card />
  </div>;
};

export default Profile;
