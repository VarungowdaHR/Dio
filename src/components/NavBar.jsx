import React from 'react'
import "../utils/css/nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const NavBar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faYoutube} id='logo' />
      <div className="search-bar">
        <input type="text" id='search-input' placeholder='Search here.....' />
        <button onClick={()=>{}} id='search-btn'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default NavBar