import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
const Header = () => {
    
  return (
   
    <nav className='header'>
<img src={logo} alt='logo'/>
<div>
    <Link to="/tvshows">Tv Shows</Link>
    <Link to="/tvshows">Movies</Link>
    <Link to="/tvshows">Recently Added</Link>
    <Link to="/tvshows">My List</Link>
</div>
<BiSearch/>
    </nav>
  )
}

export default Header
