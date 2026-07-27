import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineSearch, HiPlus, HiMinus } from 'react-icons/hi'
import { useCart } from '../context/CartContext'
import { menuItems } from '../data/menuData'
import './Shop.css'

const categories = ['All', 'Burgers', 'Sides', 'Salads', 'Pizza', 'Chicken', 'Sandwiches']

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [quantities, setQuantities] = useState({})
  const { addToCart } = useCart()

  const filteredItems = useMemo(() => {
    let items = menuItems
    if (activeCategory !== 'All') {
      items = items.filter((item) => item.category === activeCategory)
    }
    if (searchQuery.trim()) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return items
  }, [activeCategory, searchQuery])

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
    <div className="shop-page" id="shop-page">
      {/* Hero Banner */}
      <section className="shop-hero">
        <div className="container-wide">
          <motion.div
            className="shop-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="shop-hero__tag">Our Menu</span>
            <h1 className="shop-hero__title">
              Handcrafted With <em>Passion</em>
            </h1>
            <p className="shop-hero__subtitle">
              Every dish tells a story of fresh ingredients, refined techniques, and pure culinary love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="shop-filters">
        <div className="container-wide">
          <motion.div
            className="shop-filters__bar"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="shop-filters__categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`shop-filters__cat-btn ${activeCategory === cat ? 'shop-filters__cat-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="shop-filters__search">
              <HiOutlineSearch className="shop-filters__search-icon" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="shop-filters__search-input"
                id="shop-search"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section shop-grid-section">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                className="shop-page__grid"
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="shop-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="shop-card__img">
                      {item.onSale && <span className="shop-card__badge">Sale</span>}
                      <img src={item.image} alt={item.name} />
                      <div className="shop-card__overlay">
                        <p className="shop-card__desc">{item.description}</p>
                      </div>
                    </div>
                    <div className="shop-card__info">
                      <h3 className="shop-card__name">{item.name}</h3>
                      <div className="shop-card__pricing">
                        {item.onSale ? (
                          <>
                            <span className="shop-card__price shop-card__price--sale">
                              ₹{item.price.toFixed(2)}
                            </span>
                            <span className="shop-card__price shop-card__price--original">
                              ₹{item.originalPrice.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="shop-card__price">₹{item.price.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="shop-card__actions">
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
                          className="btn btn-dark btn-sm"
                          onClick={() => handleAddToCart(item)}
                          id={`add-cart-${item.id}`}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="shop-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="shop-empty__text">No dishes found matching your criteria.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                >
                  View All Items
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Shop
