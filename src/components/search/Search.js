import React from 'react'
import "./Search.css"
import logo from "../../img/logo.png";
import {UilSearch} from '@iconscout/react-unicons';

const Search = () => {
  return (
    <div className="search">
      <img src={logo} alt="logo" />
      <div className="search-input">
         <input type="text" placeholder="#Explore" />
         <div className="s-icon">
            <UilSearch />
         </div>
      </div>
    </div>
  )
}

export default Search