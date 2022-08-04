import React from "react";
import "./InfoCard.css";

import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Londo</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Microsoft Inc</span>
      </div>

      <button className="button logoutButton">Logout</button>
    </div>
  );
};

export default InfoCard;
