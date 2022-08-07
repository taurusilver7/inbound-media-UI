import React from "react";
import Card from "../../components/card/Card";
import Followers from "../../components/followers/Followers";
import InfoCard from "../../components/infoCard/InfoCard";
import Results from "../../components/results/Results";
import Search from "../../components/search/Search";
import Suggestions from "../../components/suggestions/Suggestions";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <Search />
        <InfoCard />
        <Followers />
      </div>
      <div className="center">
        <Card location={"page"} />
        <Results />
      </div>
      <div className="right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Profile;
