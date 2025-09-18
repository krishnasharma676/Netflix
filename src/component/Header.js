import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import '../css/header.css'
import { BiMenu } from 'react-icons/bi'
const Header = () => {
  const [isCompact, setIsCompact] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsCompact(true)
      } else {
        setIsCompact(false)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className={`site-header ${isCompact ? 'compact' : ''} ${isMenuOpen ? 'nav-open' : ''}`}>
<div className="top-bar">
<div className="container">
<div className="top-links">
<a href="#">Mobile</a>
<span className="separator">|</span>
<a href="#">Care</a>
<span className="separator">|</span>
<a href="#">Login</a>
<span className="separator">|</span>
<a href="#">Register</a>
</div>
</div>
</div>
<nav className="main-nav">
<div className="container">
<div className="brand">
<img src={logo} alt="logo" />
</div>
<button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
<BiMenu />
</button>
<div className="nav-links">
<Link to="/tvshows">TV Shows</Link>
<Link to="/movies">Movies</Link>
<Link to="/recent">Recently Added</Link>
<Link to="/my-list">My List</Link>
</div>
<div className="cta">
<Link to="/get-started" className="btn-primary">Get Started</Link>
</div>
</div>
</nav>
    </header>
  )
}

export default Header
