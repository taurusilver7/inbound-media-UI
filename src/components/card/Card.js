import React from "react";
import "./Card.css";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/profileImg.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const profilePage = false;
  return (
    <div className="card">
      <div className="image">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover1.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultProfile.png"
          }
          alt="profile_img"
        />
      </div>

      <div className="profileName">
        <span>
          {user.firstName} {user.lastName}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div className="follow">
          <div className="follows">
            <span>{user.followings.length}</span>
            <span>Following</span>
          </div>

          <div className="vl">
            {/* vertical line: It wasn't a predefine element in html, but created from CSS. */}
          </div>

          <div className="follows">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follows">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {profilePage ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default Card;
