import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiPlus, HiMinus, HiOutlineShoppingBag } from 'react-icons/hi'
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
                <h3 className="subscriptions__card-title">{sub.title}</h3>
                <p className="subscriptions__card-price">
                  ₹{sub.price.toFixed(2)} <span>/ {sub.period}</span>
                </p>
                <p className="subscriptions__card-desc">{sub.description}</p>
                <button className="btn btn-outline subscriptions__card-btn">Sign up</button>
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

          <form className="inquiries__form" id="inquiries-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="inq-fname">First Name *</label>
                <input type="text" id="inq-fname" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="inq-lname">Last Name *</label>
                <input type="text" id="inq-lname" className="form-input" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-email">Email *</label>
              <input type="email" id="inq-email" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-message">Message *</label>
              <textarea id="inq-message" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark" id="inq-submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
