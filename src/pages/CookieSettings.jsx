import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSliders, FiCheck, FiInfo } from 'react-icons/fi'
import toast from 'react-hot-toast'
import './CookieSettings.css'

function CookieSettings() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  })

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleToggle = (key) => {
    if (key === 'essential') return
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    toast.success('Your cookie preferences have been updated successfully!')
  }

  return (
    <div className="cookie-page" id="cookie-settings-page">
      {/* Page Header */}
      <section className="legal-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="legal-hero__badge">
              <FiSliders size={16} /> Privacy Controls
            </span>
            <h1 className="legal-hero__title">Cookie Preferences</h1>
            <p className="legal-hero__subtitle">
              Manage how cookies & telemetry are utilized to tailor your experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section cookie-content">
        <div className="container container--narrow">
          <motion.div className="cookie-card-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            
            <div className="cookie-info-alert">
              <FiInfo size={22} className="info-icon" />
              <p>
                Cookies help us improve website functionality, analyze guest traffic, and personalize culinary recommendations. You can adjust your consent settings for each category below.
              </p>
            </div>

            <div className="cookie-page-item">
              <div className="cookie-page-item__info">
                <h3>Strictly Necessary Cookies</h3>
                <span className="badge-required">Always Active</span>
                <p>
                  These cookies are vital for core site operations including secure logins, table reservation forms, and shopping cart persistence.
                </p>
              </div>
              <div className="cookie-toggle cookie-toggle--disabled">
                <input type="checkbox" checked disabled id="page-cookie-essential" />
                <span className="slider round"></span>
              </div>
            </div>

            <div className="cookie-page-item">
              <div className="cookie-page-item__info">
                <h3>Performance & Analytics</h3>
                <p>
                  Helps us measure page load times, popular menu items, and guest interaction flows to continuously refine site performance.
                </p>
              </div>
              <div className="cookie-toggle">
                <input 
                  type="checkbox" 
                  checked={preferences.analytics} 
                  onChange={() => handleToggle('analytics')}
                  id="page-cookie-analytics" 
                />
                <span className="slider round" onClick={() => handleToggle('analytics')}></span>
              </div>
            </div>

            <div className="cookie-page-item">
              <div className="cookie-page-item__info">
                <h3>Personalized Marketing & VIP Invitations</h3>
                <p>
                  Enables tailored notifications regarding seasonal tasting menu releases, wine pairing events, and exclusive member discounts.
                </p>
              </div>
              <div className="cookie-toggle">
                <input 
                  type="checkbox" 
                  checked={preferences.marketing} 
                  onChange={() => handleToggle('marketing')}
                  id="page-cookie-marketing" 
                />
                <span className="slider round" onClick={() => handleToggle('marketing')}></span>
              </div>
            </div>

            <div className="cookie-page-item">
              <div className="cookie-page-item__info">
                <h3>Functional & Customization Settings</h3>
                <p>
                  Remembers your preferred language, dietary filters, and location settings for a seamless visit every time.
                </p>
              </div>
              <div className="cookie-toggle">
                <input 
                  type="checkbox" 
                  checked={preferences.preferences} 
                  onChange={() => handleToggle('preferences')}
                  id="page-cookie-functional" 
                />
                <span className="slider round" onClick={() => handleToggle('preferences')}></span>
              </div>
            </div>

            <div className="cookie-actions">
              <button className="btn btn-dark btn-save-cookies" onClick={handleSave} id="save-cookies-btn">
                <FiCheck size={18} /> Save Preferences
              </button>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CookieSettings
