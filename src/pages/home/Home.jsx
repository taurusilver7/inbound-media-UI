import React from "react";
import Results from "../../components/results/Results";
import Profile from "../../components/profile/Profile";
import "./Home.css";
import Suggestions from "../../components/suggestions/Suggestions";

const Home = () => {
  return (
    <div className="home">
      <div className="profile">
        <Profile />
      </div>
      <div className="results">
        <Results />
      </div>
      <div className="suggestions"><Suggestions /></div>
    </div>
  );
};

export default Home;
