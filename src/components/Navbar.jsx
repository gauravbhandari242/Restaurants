import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useCart } from '../context/CartContext'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const { cartCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    document.body.classList.remove('mobile-menu-open')
  }, [location])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/services', label: 'Services' },
    { path: '/experiences', label: 'Experiences' },
    { path: '/gift-cards', label: 'Gift Cards' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const desktopNavLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" id="nav-logo">
          Delicious Journey
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar__desktop-links">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-desktop-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop & Main Header Actions */}
        <div className="navbar__actions">
          <Link to="/login" className="navbar__icon-btn navbar__user-btn" id="nav-login" aria-label="Login">
            <HiOutlineUser size={20} />
          </Link>
          <button
            className="navbar__icon-btn navbar__cart-btn"
            id="nav-cart"
            aria-label="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <HiOutlineShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </button>
          <Link to="/contact" className="btn btn-dark navbar__cta" id="nav-book">
            Book now
          </Link>
          <button
            className="navbar__hamburger"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
            id="nav-hamburger"
          >
            <HiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div className={`navbar__mobile-overlay ${isMobileOpen ? 'navbar__mobile-overlay--open' : ''}`}>
        <div className="navbar__mobile-header">
          <Link to="/" className="navbar__mobile-brand" onClick={() => setIsMobileOpen(false)}>
            Delicious Journey
          </Link>
          <button
            className="navbar__mobile-close-btn"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <HiOutlineX size={26} />
          </button>
        </div>

        <div className="navbar__mobile-body">
          <div className="navbar__mobile-menu-list">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar__mobile-actions">
            <Link 
              to="/login" 
              className="btn btn-outline navbar__mobile-btn"
              onClick={() => setIsMobileOpen(false)}
            >
              Account Login
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-dark navbar__mobile-btn"
              onClick={() => setIsMobileOpen(false)}
            >
              Book A Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
