import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page" id="contact-page">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="contact-page__title">
              Begin Your Reservation Inquiry
            </h1>
            <p className="contact-page__subtitle">
              Provide your details in the form below so our team can facilitate a comprehensive dining solution tailored to your reservation, event, or catering needs.
            </p>
          </motion.div>

          <motion.form
            className="contact-page__form"
            id="contact-form"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="ct-fname">First Name *</label>
                <input type="text" id="ct-fname" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="ct-lname">Last Name *</label>
                <input type="text" id="ct-lname" className="form-input" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="ct-email">Email *</label>
              <input type="email" id="ct-email" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="ct-message">Message *</label>
              <textarea id="ct-message" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark" id="ct-submit">
              Send
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default Contact
