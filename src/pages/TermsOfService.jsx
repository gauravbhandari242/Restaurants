import React from 'react'
import { motion } from 'framer-motion'
import { FiFileText, FiCalendar, FiDollarSign, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import './PrivacyPolicy.css'

function TermsOfService() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="legal-page" id="terms-of-service-page">
      {/* Page Header */}
      <section className="legal-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="legal-hero__badge">
              <FiFileText size={16} /> Guest Policy
            </span>
            <h1 className="legal-hero__title">Terms of Service</h1>
            <p className="legal-hero__subtitle">
              Delicious Journey Dining & Reservation Guidelines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section legal-content">
        <div className="container container--narrow">
          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website, reserving table seatings, purchasing gourmet products or gift cards, and engaging our private dining or catering services, you agree to comply with the terms and conditions outlined below.
            </p>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiCalendar className="legal-icon" /> 2. Table Reservations & Cancellation Policy</h2>
            <p>To preserve our culinary standards and seating availability:</p>
            <ul>
              <li><strong>Standard Dining:</strong> Reservations are held for 15 minutes past the scheduled time before being released.</li>
              <li><strong>Chef's Tasting Table & Private Vault:</strong> Requires advance credit card deposit. Cancellations must be made at least 24 hours in advance for a full refund.</li>
              <li><strong>No-Shows:</strong> Late cancellations or no-shows within 12 hours of seating will incur a $50 per guest fee.</li>
            </ul>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiDollarSign className="legal-icon" /> 3. Gourmet Shop & Gift Cards</h2>
            <p>
              All prices displayed on our website are in USD. Gift cards are non-refundable, non-transferable for cash, and hold no expiration date. Orders for perishable artisanal goods are prepared fresh upon order placement.
            </p>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiAlertCircle className="legal-icon" /> 4. Guest Ambience & Dress Code</h2>
            <p>
              Delicious Journey maintains an elegant, smart-casual environment for evening seatings. We ask guests to refrain from athletic wear or beachwear. Management reserves the right to decline seating to ensure guest comfort and decorum.
            </p>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiCheckCircle className="legal-icon" /> 5. Food Allergies & Dietary Notice</h2>
            <p>
              While our kitchen exercises extreme caution regarding cross-contamination, dishes are prepared in an environment handling nuts, dairy, seafood, and gluten. Please inform your server or concierge of severe allergies prior to dining.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
