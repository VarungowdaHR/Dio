import React, { useState } from 'react'
import "../utils/css/nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {useNavigate } from 'react-router-dom';
const NavBar = () => {
  const [query, setquery] = useState('');
  const navigate=useNavigate();

  const handleClick=()=>{
    if(query){
      navigate(`search/${query}`)
      setquery('')
    }
  }

  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faYoutube} id='logo' />
      <div className="search-bar">
        <input type="text"
        id='search-input' 
        placeholder='Search here.....'
        value={query}
        onChange={(e)=>setquery(e.target.value)}
        />
        <button onClick={handleClick} id='search-btn' >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default NavBar