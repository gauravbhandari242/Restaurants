import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import toast from 'react-hot-toast'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
      toast.success(`Thank you ${formData.fname}! Your reservation inquiry has been received. Our concierge team will contact you shortly.`)
      setFormData({ fname: '', lname: '', email: '', message: '' })
    }, 800)
  }

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

          {isSubmitted ? (
            <motion.div 
              className="contact-success-banner"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '2.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: '2rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <HiCheckCircle size={48} style={{ color: '#d4af37', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>
                Reservation Inquiry Received!
              </h3>
              <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>
                Our reservation desk has logged your request and will contact you via email/phone shortly.
              </p>
              <button 
                className="btn btn-outline"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              className="contact-page__form"
              id="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-fname">First Name *</label>
                  <input 
                    type="text" 
                    id="ct-fname" 
                    name="fname"
                    className="form-input" 
                    value={formData.fname}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-lname">Last Name *</label>
                  <input 
                    type="text" 
                    id="ct-lname" 
                    name="lname"
                    className="form-input" 
                    value={formData.lname}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="ct-email">Email *</label>
                <input 
                  type="email" 
                  id="ct-email" 
                  name="email"
                  className="form-input" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="ct-message">Message *</label>
                <textarea 
                  id="ct-message" 
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
                id="ct-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Contact
