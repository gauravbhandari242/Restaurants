import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiUsers, FiCheckCircle, FiSend, FiClock, FiStar } from 'react-icons/fi'
import toast from 'react-hot-toast'
import './Experiences.css'

export const EXPERIENCE_ITEMS = [
  {
    id: 'chef-table',
    title: "Chef's Tasting Table",
    tagline: 'An exclusive multi-course theatrical dining journey',
    price: '$185 / guest',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    description: 'Experience an intimate eight-course culinary tasting session prepared live by our Executive Chef. Watch rare techniques, custom ingredient foraging, and artisanal wine pairings executed right before your eyes.',
    highlights: [
      '8-Course Seasonal Signature Tasting Menu',
      'Dedicated Executive Chef & Master Sommelier',
      'Includes Vintage Wine & Champagne Pairings',
      'Intimate Seating limited to 8 Guests per evening',
    ],
  },
  {
    id: 'private-dining',
    title: 'Private Dining Vault',
    tagline: 'Secluded luxury for private celebrations & corporate dinners',
    price: '$650 minimum spend',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    description: 'Our soundproof subterranean wine vault accommodates up to 24 guests with bespoke table settings, personalized menu customization, ambient acoustics, and dedicated white-glove service.',
    highlights: [
      'Private Acoustic Chamber & Custom Lighting Controls',
      'Personalized Menu Printing & Logo Engraving',
      'Dedicated Butler Service & Private Sommelier',
      'Accommodates 10 - 24 guests comfortably',
    ],
  },
  {
    id: 'wine-cellar',
    title: 'Sommelier Cellar Tour',
    tagline: 'A guided journey through rare vintages & craft pairings',
    price: '$120 / guest',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    description: 'Enter our subterranean reserve cellar storing over 3,000 vintage bottles. Guided by our Master Sommelier, sample five exceptional reserve wines paired with artisanal cheeses and cured delicacies.',
    highlights: [
      'Guided Private Access to Temperature-Controlled Vault',
      '5 Grand Cru & Vintage Reserve Wine Tastings',
      'Artisanal Charcuterie & Artisan Cheese Pairings',
      'Personalized Cellar Journal & Souvenir Gift Bottle',
    ],
  },
  {
    id: 'catering',
    title: 'Bespoke Catering & Events',
    tagline: 'Michelin-grade culinary experiences brought to your venue',
    price: 'Custom Proposal',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    description: 'Transform your wedding, luxury gala, or high-profile corporate retreat with our mobile kitchen and full service staff. Complete custom menu design, cocktail mixology, and event execution.',
    highlights: [
      'Full On-Site Mobile Kitchen & Live Cooking Stations',
      'Customized Menu Design suited for dietary preferences',
      'Professional Staffing, Mixologists, & Service Managers',
      'Full Tableware, Glassware, & Floral Setup Options',
    ],
  },
]

function Experiences() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type') || 'chef-table'
  const [activeTab, setActiveTab] = useState(initialType)
  
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const typeParam = searchParams.get('type')
    if (typeParam && EXPERIENCE_ITEMS.some(exp => exp.id === typeParam)) {
      setActiveTab(typeParam)
    }
  }, [searchParams])

  const activeExp = EXPERIENCE_ITEMS.find(item => item.id === activeTab) || EXPERIENCE_ITEMS[0]

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!date) {
      toast.error('Please select a preferred reservation date')
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      toast.success(`Reservation inquiry received for ${activeExp.title}! Our VIP Concierge will contact you within 2 hours.`)
      setIsSubmitting(false)
      setDate('')
      setNotes('')
    }, 1000)
  }

  return (
    <div className="experiences-page" id="experiences-page">
      {/* Hero Section */}
      <section className="exp-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="exp-hero__badge">
              <FiAward size={16} /> VIP DINING COLLECTION
            </span>
            <h1 className="exp-hero__title">Curated Dining Experiences</h1>
            <p className="exp-hero__subtitle">
              Immerse yourself in extraordinary culinary craftsmanship, private tasting vaults, and world-class wine cellars tailored for life's most memorable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="exp-nav-section">
        <div className="container">
          <div className="exp-tabs">
            {EXPERIENCE_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`exp-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
                id={`exp-tab-${item.id}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Active Experience Showcase */}
      <section className="section exp-detail-section">
        <div className="container">
          <motion.div 
            key={activeExp.id}
            className="exp-detail-card"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="exp-detail-grid">
              
              {/* Image & Narrative */}
              <div className="exp-info-side">
                <div className="exp-image-wrapper">
                  <img src={activeExp.image} alt={activeExp.title} className="exp-image" />
                  <span className="exp-price-tag">{activeExp.price}</span>
                </div>
                <div className="exp-narrative">
                  <h2 className="exp-title">{activeExp.title}</h2>
                  <p className="exp-subtitle">{activeExp.tagline}</p>
                  <p className="exp-desc">{activeExp.description}</p>
                  
                  <h3 className="highlights-heading"><FiStar className="star-icon" /> What is Included</h3>
                  <ul className="highlights-list">
                    {activeExp.highlights.map((h, i) => (
                      <li key={i}><FiCheckCircle className="check-icon" /> {h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reservation Booking Form */}
              <div className="exp-form-side">
                <div className="exp-form-card">
                  <h3>Reserve This Experience</h3>
                  <p className="form-subtext">Direct VIP Concierge Reservation Request</p>
                  
                  <form onSubmit={handleBookingSubmit} id="experience-booking-form">
                    <div className="form-group">
                      <label className="form-label"><FiCalendar /> Reservation Date *</label>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label"><FiUsers /> Number of Guests *</label>
                      <select 
                        className="form-input"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests (Couple)</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8+">8+ Guests (Private Party)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Special Requests / Allergies</label>
                      <textarea 
                        className="form-textarea exp-notes-input"
                        placeholder="Dietary requests, birthday celebration, preferred wine selections..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-dark exp-booking-btn"
                      disabled={isSubmitting}
                      id="submit-exp-booking"
                    >
                      <FiSend size={18} />
                      <span>{isSubmitting ? 'Requesting...' : 'Request VIP Availability'}</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experiences
