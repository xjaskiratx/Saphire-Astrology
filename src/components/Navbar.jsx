import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Components.css' // Ensure your CSS file is linked

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/transits', label: 'Transits' },
  { to: '/contact', label: 'Contact' },
  { to: '/about-us', label: 'About Us' },
  { to: '/faqs', label: 'FAQs' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="brand h3" to="/" onClick={closeMenu}>Saphire Astro</Link>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          {nav.map(item => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              onClick={closeMenu} // Close menu when a link is clicked
              style={({isActive}) => ({
                color: isActive ? '#e4c724' : 'white',
                fontWeight: isActive ? 800 : 600
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
