import React from "react";
import "./Suggestions.css";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import Trends from "../trends/Trends";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="navIcons">
        <img src={Home} alt="home_icon" />
        <UilSetting />
        <img src={Notification} alt="notification_icon" />
        <img src={Comment} alt="comment_icon" />
      </div>

      {/* Trends to display the other users & accounts */}
      <Trends />
      <button className="button suggestionsBtn">Share</button>
    </div>
  );
};

export default Suggestions;
