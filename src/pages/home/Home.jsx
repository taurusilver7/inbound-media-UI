import React from "react";
import Results from "../../components/results/Results";
import "./Home.css";
import Suggestions from "../../components/suggestions/Suggestions";
import User from "../../components/user/User";

const Home = () => {
  return (
    <div className="home">
      <div className="profile">
        <User />
      </div>
      <div className="results">
        <Results />
      </div>
      <div className="suggestions">
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
