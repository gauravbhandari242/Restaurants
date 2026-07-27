import React from 'react'
import { motion } from 'framer-motion'
import { serviceDetails } from '../data/menuData'
import './Services.css'

function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="services-page" id="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <motion.h1
            className="services-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Culinary Excellence Delivered with Precision
          </motion.h1>
          <motion.div
            className="services-hero__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              The restaurant applies culinary expertise and disciplined kitchen processes to implement refined dining solutions that consistently exceed guest expectations while optimizing ingredient integrity.
            </p>
            <p>
              Our team demonstrates comprehensive knowledge of regional flavors and modern techniques, facilitating memorable experiences through meticulous presentation and attentive, data-informed service protocols.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Listings */}
      <section className="section services-list">
        <div className="container">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } },
              }}
            >
              <div className="service-item__header">
                <h2 className="service-item__title">{service.title}</h2>
                <span className="service-item__price">{service.price}</span>
              </div>
              <p className="service-item__desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section services-inquiry">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="services-inquiry__title">
              Initiate a Customized Dining Proposal
            </h2>
            <p className="services-inquiry__subtitle">
              Submit the inquiry form to discuss objectives and timelines; our coordinators will respond promptly with a comprehensive plan and reserved availability.
            </p>
          </motion.div>

          <form className="services-inquiry__form" id="services-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="srv-fname">First Name *</label>
                <input type="text" id="srv-fname" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="srv-lname">Last Name *</label>
                <input type="text" id="srv-lname" className="form-input" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="srv-email">Email *</label>
              <input type="email" id="srv-email" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-checkbox">
                <input type="checkbox" id="srv-newsletter" />
                <span>Sign up for news and updates</span>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="srv-message">Message *</label>
              <textarea id="srv-message" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark" id="srv-submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Services
