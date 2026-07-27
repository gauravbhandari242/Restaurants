import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import './Social.css'

function Social() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      alt: 'Chef in kitchen',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      alt: 'Dining ambiance',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      alt: 'Chefs plating dishes',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      alt: 'Host welcoming guests',
    },
  ]

  return (
    <section className="section social-section" id="social-section">
      <div className="container-wide">
        <motion.div
          className="social-section__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="social-section__title">Connect on Social Media</h2>
        </motion.div>

        <div className="social-section__grid">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="social-section__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={post.image} alt={post.alt} className="social-section__img" />
              <div className="social-section__overlay">
                <FaInstagram size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="social-section__action">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark social-section__follow-btn"
            id="social-follow-btn"
          >
            FOLLOW
          </a>
        </div>
      </div>
    </section>
  )
}

export default Social
