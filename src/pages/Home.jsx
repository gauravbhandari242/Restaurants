import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiPlus, HiMinus, HiOutlineShoppingBag, HiCheckCircle } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { useCart } from '../context/CartContext'
import { menuItems, services, subscriptions } from '../data/menuData'
import Social from '../components/Social'
import heroImg from '../assets/images/hero.png'
import chefImg from '../assets/images/chef.png'
import './Home.css'

function Home() {
  const featuredItems = menuItems.filter((item) => item.featured)
  const [quantities, setQuantities] = useState({})
  const { addToCart } = useCart()

  // General Inquiries Form State
  const [inquiryForm, setInquiryForm] = useState({
    fname: '',
    lname: '',
    email: '',
    message: '',
  })
  const [inquirySubmitting, setInquirySubmitting] = useState(false)
  const [inquirySubmitted, setInquirySubmitted] = useState(false)

  const handleInquiryChange = (e) => {
    setInquiryForm({ ...inquiryForm, [e.target.name]: e.target.value })
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    if (!inquiryForm.fname || !inquiryForm.lname || !inquiryForm.email || !inquiryForm.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setInquirySubmitting(true)
    setTimeout(() => {
      setInquirySubmitting(false)
      setInquirySubmitted(true)
      toast.success(`Thank you ${inquiryForm.fname}! Your general inquiry has been received. Our team will respond shortly.`)
      setInquiryForm({ fname: '', lname: '', email: '', message: '' })
    }, 800)
  }

  const handleSubscriptionSignUp = (sub) => {
    toast.success(`Thank you for enrolling in ${sub.title}! Access details have been sent to your email.`)
  }

  const updateQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }))
  }

  const handleAddToCart = (item) => {
    const qty = quantities[item.id] || 1
    addToCart(item, qty)
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }))
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="home" id="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero__image-wrapper">
          <img src={heroImg} alt="Restaurant interior" className="hero__image" />
          <div className="hero__overlay" />
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contemporary Dining Refined
          </motion.h1>
        </div>
      </section>

      {/* Featured Plates */}
      <section className="section featured" id="featured-section">
        <div className="container-wide">
          <div className="featured__header">
            <motion.h2
              className="featured__title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Featured Plates
            </motion.h2>
            <Link to="/shop" className="btn btn-outline" id="explore-menu-btn">
              Explore Full Menu
            </Link>
          </div>

          <div className="featured__grid">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="featured__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } },
                }}
              >
                <div className="featured__card-img">
                  <img src={item.image} alt={item.name} />
                  <div className="featured__card-overlay">
                    <p className="featured__card-desc">{item.description}</p>
                  </div>
                </div>
                <div className="featured__card-info">
                  <div className="featured__card-top">
                    <h3 className="featured__card-name">{item.name}</h3>
                    <span className="featured__card-category">{item.category}</span>
                  </div>
                  <p className="featured__card-price">₹{item.price.toFixed(2)}</p>
                  <div className="featured__card-actions">
                    <div className="qty-selector">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <HiMinus size={14} />
                      </button>
                      <span className="qty-value">{quantities[item.id] || 1}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        <HiPlus size={14} />
                      </button>
                    </div>
                    <button
                      className="btn btn-dark btn-sm featured__add-btn"
                      id={`add-cart-${item.id}`}
                      onClick={() => handleAddToCart(item)}
                    >
                      <HiOutlineShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Services */}
      <section className="section services-section" id="services-section">
        <div className="container-wide">
          <motion.h2
            className="services-section__title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Hospitality Services
          </motion.h2>

          <div className="services-section__grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="services-section__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
              >
                <h3 className="services-section__card-title">{service.title}</h3>
                <p className="services-section__card-desc">{service.description}</p>
                <Link to={service.link} className="services-section__card-link">
                  {service.linkText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Culinary Resources / Subscriptions */}
      <section className="section subscriptions" id="subscriptions-section">
        <div className="container-wide">
          <motion.h2
            className="subscriptions__title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Digital Culinary Resources
          </motion.h2>

          <div className="subscriptions__grid">
            {subscriptions.map((sub, index) => (
              <motion.div
                key={sub.id}
                className="subscriptions__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
              >
                {sub.image && (
                  <div className="subscriptions__card-img">
                    <img src={sub.image} alt={sub.title} />
                  </div>
                )}
                <div className="subscriptions__card-body">
                  <h3 className="subscriptions__card-title">{sub.title}</h3>
                  <p className="subscriptions__card-price">
                    ₹{sub.price.toFixed(2)} <span>/ {sub.period}</span>
                  </p>
                  <p className="subscriptions__card-desc">{sub.description}</p>
                  <button 
                    className="btn btn-dark subscriptions__card-btn"
                    onClick={() => handleSubscriptionSignUp(sub)}
                  >
                    Sign up
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Philosophy */}
      <section className="section philosophy" id="philosophy-section">
        <div className="container-wide">
          <div className="philosophy__grid">
            <motion.div
              className="philosophy__image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={chefImg} alt="Chef preparing food" />
            </motion.div>
            <motion.div
              className="philosophy__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="philosophy__title">Culinary Philosophy</h2>
              <p className="philosophy__text">
                The team prioritizes regionally sourced ingredients, applying classical techniques to optimize flavor integrity.
              </p>
              <Link to="/about" className="btn btn-dark" id="learn-more-btn">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect on Social Media Component */}
      <Social />

      {/* General Inquiries */}
      <section className="section inquiries" id="inquiries-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="inquiries__title">General Inquiries</h2>
            <p className="inquiries__subtitle">
              Submit your questions or event requirements through the form to initiate a tailored proposal.
            </p>
          </motion.div>

          {inquirySubmitted ? (
            <motion.div 
              className="inquiry-success-banner"
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
                Inquiry Received!
              </h3>
              <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>
                Thank you for contacting us. Our guest relations team has received your message and will reach out within 2 hours.
              </p>
              <button 
                className="btn btn-outline"
                onClick={() => setInquirySubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form className="inquiries__form" id="inquiries-form" onSubmit={handleInquirySubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="inq-fname">First Name *</label>
                  <input 
                    type="text" 
                    id="inq-fname" 
                    name="fname"
                    className="form-input" 
                    value={inquiryForm.fname}
                    onChange={handleInquiryChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="inq-lname">Last Name *</label>
                  <input 
                    type="text" 
                    id="inq-lname" 
                    name="lname"
                    className="form-input" 
                    value={inquiryForm.lname}
                    onChange={handleInquiryChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="inq-email">Email *</label>
                <input 
                  type="email" 
                  id="inq-email" 
                  name="email"
                  className="form-input" 
                  value={inquiryForm.email}
                  onChange={handleInquiryChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="inq-message">Message *</label>
                <textarea 
                  id="inq-message" 
                  name="message"
                  className="form-textarea" 
                  value={inquiryForm.message}
                  onChange={handleInquiryChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-dark" 
                id="inq-submit"
                disabled={inquirySubmitting}
              >
                {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
