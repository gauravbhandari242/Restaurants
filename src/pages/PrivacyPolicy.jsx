import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiLock, FiEye, FiCheck, FiMail, FiGlobe } from 'react-icons/fi'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="legal-page" id="privacy-policy-page">
      {/* Page Header */}
      <section className="legal-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="legal-hero__badge">
              <FiShield size={16} /> Privacy & Trust
            </span>
            <h1 className="legal-hero__title">Privacy Policy</h1>
            <p className="legal-hero__subtitle">
              Last Updated: July 27, 2026 • Delicious Journey Fine Dining Group
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section legal-content">
        <div className="container container--narrow">
          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>1. Commitment to Privacy</h2>
            <p>
              At <strong>Delicious Journey</strong>, we hold your privacy and personal trust to the highest standard. This Privacy Policy outlines how our restaurant collects, uses, stores, and protects personal information gathered through our web platform, dining reservations, gourmet shop, and VIP Gourmet Club membership.
            </p>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiLock className="legal-icon" /> 2. Information We Collect</h2>
            <p>To provide a tailored fine dining experience, we collect information when you interact with us:</p>
            <ul>
              <li><strong>Reservation & Contact Details:</strong> Full name, phone number, email address, dietary restrictions, and special anniversary dates.</li>
              <li><strong>Gourmet Shop & Order Data:</strong> Delivery addresses, gift card recipient details, purchase history, and billing preferences.</li>
              <li><strong>Digital Interactions:</strong> IP address, device telemetry, browser type, and cookie analytical data to enhance site navigation.</li>
            </ul>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiEye className="legal-icon" /> 3. How We Utilize Your Information</h2>
            <p>Your data is processed strictly for legitimate culinary & hospitality purposes:</p>
            <ul>
              <li>Fulfilling table bookings and personalized dining requirements.</li>
              <li>Processing online transactions, gift cards, and gourmet deliveries.</li>
              <li>Sending exclusive invitations to seasonal tasting menus and chef's table previews (with your consent).</li>
              <li>Maintaining enterprise security and fraud prevention protocols.</li>
            </ul>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiCheck className="legal-icon" /> 4. Data Security & Retention</h2>
            <p>
              We implement TLS 1.3 encryption, tokenized payment processing, and strict internal access protocols. Your payment credentials are handled exclusively by PCI-DSS compliant payment gateways and are never stored directly on our servers.
            </p>
          </motion.div>

          <motion.div className="legal-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2><FiGlobe className="legal-icon" /> 5. Your Rights & Contacts</h2>
            <p>
              You maintain the right to request access to your personal data, request corrections, or opt out of promotional communications at any time.
            </p>
            <div className="contact-box">
              <FiMail size={20} className="contact-box-icon" />
              <div>
                <strong>Data Protection Office:</strong>
                <div>Email: <a href="mailto:privacy@deliciousjourney.com">privacy@deliciousjourney.com</a></div>
                <div>Address: 742 Evergreen Terrace, Gourmet District, NY 10001</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
