import React from "react";
import "./Card.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img src={Cover} alt="cover" />
        <img src={Profile} alt="profile_img" />
      </div>

      <div className="profileName">
        <span>Zendaya MJ</span>
        <span>Senior UX designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div className="follow">
          <div className="follows">
            <span>6,850</span>
            <span>Following</span>
          </div>

          <div className="vl">
            {/* vertical line: It wasn't a predefine element in html, but created from CSS. */}
          </div>

          <div className="follows">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
};

export default Card;
