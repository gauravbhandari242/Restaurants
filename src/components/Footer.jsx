import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiSend, 
  FiArrowUp, 
  FiInstagram, 
  FiFacebook, 
  FiTwitter, 
  FiAward 
} from 'react-icons/fi'
import { FaTripadvisor, FaYelp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      toast.success('Thank you for subscribing to Gourmet Club!')
      setEmail('')
      setIsSubmitting(false)
    }, 800)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="site-footer" id="site-footer">
      {/* Top Banner / Newsletter */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="footer-newsletter__wrapper">
            <div className="footer-newsletter__content">
              <span className="footer-newsletter__tag">
                <FiAward className="footer-tag-icon" /> VIP GOURMET CLUB
              </span>
              <h3 className="footer-newsletter__title">Join Our Culinary Journey</h3>
              <p className="footer-newsletter__desc">
                Subscribe to receive seasonal menu reveals, secret chef tasting invitations, and exclusive dining privileges.
              </p>
            </div>
            <form className="footer-newsletter__form" onSubmit={handleSubscribe} id="footer-newsletter-form">
              <div className="footer-newsletter__input-group">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-newsletter__input"
                  id="footer-email-input"
                  required
                />
                <button 
                  type="submit" 
                  className="btn footer-newsletter__btn"
                  id="footer-subscribe-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Joining...' : 'Subscribe'}</span>
                  <FiSend size={16} />
                </button>
              </div>
              <span className="footer-newsletter__note">
                🔒 We respect your privacy. Unsubscribe anytime.
              </span>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand & Identity */}
            <div className="footer-col footer-col--brand">
              <Link to="/" className="footer-logo" id="footer-brand-logo">
                Delicious Journey
              </Link>
              <p className="footer-bio">
                An extraordinary culinary destination blending timeless French technique with modern artisanal gastronomy. Every dish tells a story of passion, craftsmanship, and local organic sourcing.
              </p>
              <div className="footer-status">
                <span className="status-dot status-dot--online"></span>
                <span className="status-text">Open Today: <strong>5:00 PM - 11:00 PM</strong></span>
              </div>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram" id="social-instagram">
                  <FiInstagram size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook" id="social-facebook">
                  <FiFacebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter" id="social-twitter">
                  <FiTwitter size={18} />
                </a>
                <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TripAdvisor" id="social-tripadvisor">
                  <FaTripadvisor size={18} />
                </a>
                <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Yelp" id="social-yelp">
                  <FaYelp size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-links">
                <li><Link to="/" id="footer-link-home">Home Experience</Link></li>
                <li><Link to="/shop" id="footer-link-shop">Gourmet Shop</Link></li>
                <li><Link to="/services" id="footer-link-services">Services & Catering</Link></li>
                <li><Link to="/about" id="footer-link-about">Our Story & Chefs</Link></li>
                <li><Link to="/contact" id="footer-link-contact">Contact & Reservations</Link></li>
              </ul>
            </div>

            {/* Column 3: Dining Experiences */}
            <div className="footer-col">
              <h4 className="footer-heading">Experiences</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/experiences?type=chef-table" id="footer-link-chef-table">
                    Chef's Tasting Table
                  </Link>
                </li>
                <li>
                  <Link to="/experiences?type=private-dining" id="footer-link-private">
                    Private Dining Vault
                  </Link>
                </li>
                <li>
                  <Link to="/experiences?type=wine-cellar" id="footer-link-wine">
                    Sommelier Cellar Tour
                  </Link>
                </li>
                <li>
                  <Link to="/experiences?type=catering" id="footer-link-events">
                    Bespoke Catering
                  </Link>
                </li>
                <li>
                  <Link to="/gift-cards" id="footer-link-gift">
                    Gift Cards & Hampers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="footer-col footer-col--contact">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact-list">
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <span>742 Evergreen Terrace, Gourmet District, NY 10001</span>
                </div>
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <a href="tel:+18005550199">+1 (800) 555-0199</a>
                </div>
                <div className="contact-item">
                  <FiMail className="contact-icon" />
                  <a href="mailto:contact@deliciousjourney.com">contact@deliciousjourney.com</a>
                </div>
                <div className="contact-item">
                  <FiClock className="contact-icon" />
                  <div className="contact-hours">
                    <div>Mon - Thu: 5:00 PM - 10:00 PM</div>
                    <div>Fri - Sun: 11:30 AM - 11:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__wrapper">
            <p className="footer-copyright">
              © {new Date().getFullYear()} <strong>Delicious Journey</strong>. All Rights Reserved. Crafted with passion.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" id="footer-privacy">
                Privacy Policy
              </Link>
              <span className="legal-divider">•</span>
              <Link to="/terms" id="footer-terms">
                Terms of Service
              </Link>
              <span className="legal-divider">•</span>
              <Link to="/cookies" id="footer-cookies">
                Cookie Settings
              </Link>
            </div>
            <button 
              className="back-to-top-btn" 
              onClick={scrollToTop} 
              aria-label="Scroll back to top" 
              id="footer-back-to-top"
            >
              <FiArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
