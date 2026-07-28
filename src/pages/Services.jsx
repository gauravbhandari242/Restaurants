import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { serviceDetails } from '../data/menuData'
import './Services.css'

function Services() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    newsletter: false,
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fname || !formData.lname || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success(`Proposal request received for ${formData.fname}! Our culinary coordinator will reach out shortly.`)
      setFormData({ fname: '', lname: '', email: '', newsletter: false, message: '' })
    }, 800)
  }

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

          {isSubmitted ? (
            <motion.div 
              className="services-success-banner"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '2.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: '2rem'
              }}
            >
              <HiCheckCircle size={48} style={{ color: '#d4af37', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>
                Proposal Request Received!
              </h3>
              <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>
                Our event coordinators are reviewing your specifications and will deliver a custom proposal to your inbox.
              </p>
              <button 
                className="btn btn-outline"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Proposal Request
              </button>
            </motion.div>
          ) : (
            <form className="services-inquiry__form" id="services-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="srv-fname">First Name *</label>
                  <input 
                    type="text" 
                    id="srv-fname" 
                    name="fname"
                    className="form-input" 
                    value={formData.fname}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="srv-lname">Last Name *</label>
                  <input 
                    type="text" 
                    id="srv-lname" 
                    name="lname"
                    className="form-input" 
                    value={formData.lname}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="srv-email">Email *</label>
                <input 
                  type="email" 
                  id="srv-email" 
                  name="email"
                  className="form-input" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-checkbox">
                  <input 
                    type="checkbox" 
                    id="srv-newsletter" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  <span>Sign up for news and updates</span>
                </label>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="srv-message">Message *</label>
                <textarea 
                  id="srv-message" 
                  name="message"
                  className="form-textarea" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-dark" 
                id="srv-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Proposal Request'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Services
