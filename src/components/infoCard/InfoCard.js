import React, { useEffect } from "react";
import "./InfoCard.css";

import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import InfoModal from "../modal/InfoModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as userApi from "../../api/user";
import { logout } from "../../actions/auth";

const InfoCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [profileUser, setProfileUser] = useState({});
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const params = useParams();

  const profileUserId = params.id;

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // When you come to your own info card
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
        console.log(user);
      } else {
        // when searching for others info card.
        const profileUser = await userApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser);
      }
    };

    fetchProfileUser();
  }, [user]);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        {user._id === profileUserId && (
          <div>
            <UilPen
              onClick={() => setOpened(true)}
              width="2rem"
              height="1.2rem"
            />
            <InfoModal opened={opened} setOpened={setOpened} data={user} />
          </div>
        )}
      </div>

      <div className="info">
        <span>
          <b>Username: </b>
        </span>
        <span>#{profileUser?.username}</span>
      </div>
      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>{profileUser?.relationship}</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser?.livesIn}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser?.worksAt}</span>
      </div>

      <button onClick={handleLogout} className="button logoutButton">
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
