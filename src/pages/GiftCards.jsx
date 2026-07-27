import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGift, FiCreditCard, FiShoppingBag, FiCheckCircle, FiHeart, FiAward } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'
import './GiftCards.css'

function GiftCards() {
  const { addToCart, setIsCartOpen } = useCart()
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [senderName, setSenderName] = useState('')
  const [personalNote, setPersonalNote] = useState('')
  const [cardDesign, setCardDesign] = useState('gold')

  const amounts = [50, 100, 250, 500]

  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (!finalAmount || finalAmount < 10) {
      toast.error('Minimum gift card value is $10')
      return
    }

    const giftCardItem = {
      id: `gift-card-${Date.now()}`,
      name: `Delicious Journey ${cardDesign.toUpperCase()} Gift Card`,
      price: finalAmount,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80',
      category: 'Gift Card',
      description: `Digital Card for ${recipientName || 'Valued Guest'} (${recipientEmail || 'Digital Voucher'})`,
    }

    addToCart(giftCardItem)
    toast.success(`$${finalAmount} Gift Card added to your cart!`)
    setIsCartOpen(true)
  }

  return (
    <div className="gift-cards-page" id="gift-cards-page">
      {/* Hero Banner */}
      <section className="gift-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="gift-hero__content">
            <span className="gift-hero__badge">
              <FiGift size={16} /> VIP Culinary Vouchers
            </span>
            <h1 className="gift-hero__title">Give the Gift of Exceptional Dining</h1>
            <p className="gift-hero__subtitle">
              Treat your loved ones, business partners, or gourmands to an unforgettable evening at Delicious Journey. Valid for all dining experiences, wine cellar tours, and takeaway hampers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section gift-main">
        <div className="container">
          <div className="gift-grid">
            
            {/* Visual Card Preview Box */}
            <motion.div 
              className="gift-card-display-column" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
            >
              <div className={`page-giftcard-card page-giftcard-card--${cardDesign}`}>
                <div className="card-top">
                  <span className="card-brand">Delicious Journey</span>
                  <FiAward size={24} className="card-award-icon" />
                </div>
                <div className="card-center">
                  <span className="card-amount-label">VALUE</span>
                  <span className="card-amount-val">${finalAmount}</span>
                </div>
                <div className="card-bottom">
                  <div>
                    <div className="card-recipient-label">FOR</div>
                    <div className="card-recipient-val">{recipientName || 'Valued Guest'}</div>
                  </div>
                  <FiCreditCard size={28} />
                </div>
              </div>

              <div className="gift-perks-box">
                <h3><FiCheckCircle className="perk-icon" /> Gift Card Privileges</h3>
                <ul>
                  <li>Valid for 24 months from purchase date</li>
                  <li>Redeemable for Table Dining, Chef's Table & Shop items</li>
                  <li>Instant digital email delivery with custom gift note</li>
                  <li>Physical gold-embossed box delivery available on request</li>
                </ul>
              </div>
            </motion.div>

            {/* Customization Form Column */}
            <motion.div 
              className="gift-card-form-column"
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
            >
              <form onSubmit={handleAddToCart} className="gift-form">
                <h2 className="gift-form__heading">Customize Your Gift Card</h2>

                {/* Amount Selection */}
                <div className="gift-form__section">
                  <label className="gift-form__label">1. Select Card Amount</label>
                  <div className="amount-options-grid">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className={`amount-card-btn ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedAmount(amt)
                          setCustomAmount('')
                        }}
                      >
                        ${amt}
                      </button>
                    ))}
                    <div className="custom-input-wrap">
                      <span>$</span>
                      <input
                        type="number"
                        placeholder="Custom"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        min="10"
                      />
                    </div>
                  </div>
                </div>

                {/* Design Selection */}
                <div className="gift-form__section">
                  <label className="gift-form__label">2. Card Theme</label>
                  <div className="theme-options-grid">
                    <button
                      type="button"
                      className={`theme-btn ${cardDesign === 'gold' ? 'active' : ''}`}
                      onClick={() => setCardDesign('gold')}
                    >
                      🏆 Royal Gold
                    </button>
                    <button
                      type="button"
                      className={`theme-btn ${cardDesign === 'noir' ? 'active' : ''}`}
                      onClick={() => setCardDesign('noir')}
                    >
                      🖤 Obsidian Noir
                    </button>
                    <button
                      type="button"
                      className={`theme-btn ${cardDesign === 'rose' ? 'active' : ''}`}
                      onClick={() => setCardDesign('rose')}
                    >
                      🌸 Rose Gold
                    </button>
                  </div>
                </div>

                {/* Sender & Recipient Details */}
                <div className="gift-form__section">
                  <label className="gift-form__label">3. Personalization</label>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-sublabel">Your Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Alexander Vance"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-sublabel">Recipient Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Sophia Loren"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-sublabel">Recipient Email</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="e.g. recipient@example.com"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-sublabel">Personal Gift Message</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Write your heart-felt message here..."
                      value={personalNote}
                      onChange={(e) => setPersonalNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark gift-submit-btn" id="giftcard-page-submit">
                  <FiShoppingBag size={18} />
                  <span>Add Gift Card to Cart (${finalAmount})</span>
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default GiftCards
