import React from "react";
import "./Search.css";
import logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="search">
      <Link to="../home">
        <img src={logo} alt="logo" />
      </Link>
      <div className="search-input">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
