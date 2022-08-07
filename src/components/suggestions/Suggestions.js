import React from "react";
import "./Suggestions.css";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import Trends from "../trends/Trends";
import { useState } from "react";
import ShareModal from "../shareModal/ShareModal";
import { Link } from "react-router-dom";

const Suggestions = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="suggestions">
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="home_icon" />
        </Link>
        <UilSetting />
        <img src={Notification} alt="notification_icon" />
        <img src={Comment} alt="comment_icon" />
      </div>

      {/* Trends to display the other users & accounts */}
      <Trends />
      <button onClick={() => setOpened(true)} className="button suggestionsBtn">
        Share
      </button>
      <ShareModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default Suggestions;
