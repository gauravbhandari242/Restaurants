import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
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
      alt: 'Chef preparing artisanal dish',
      likes: '1.2k',
      caption: 'Mastering flavor integrity with locally sourced seasonal ingredients.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      alt: 'Atmospheric dining hall',
      likes: '980',
      caption: 'Evening dining atmosphere designed for memorable gatherings.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      alt: 'Chefs meticulously plating',
      likes: '2.4k',
      caption: 'Precision in every plate. Behind the scenes with our culinary team.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      alt: 'Host welcoming guests',
      likes: '1.5k',
      caption: 'Warm hospitality welcoming you to a refined dining experience.',
    },
  ]

  return (
    <div className="social-page" id="social-page">
      {/* Social Page Hero Header */}
      <section className="social-hero" id="social-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="social-hero__content"
          >
            <h1 className="social-hero__title">Connect on Social Media</h1>
            <p className="social-hero__subtitle">
              Follow our culinary journey, behind-the-scenes stories, and latest creations on our official channels.
            </p>
            <div className="social-hero__links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-pill">
                <FaInstagram size={18} /> Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-pill">
                <FaFacebookF size={16} /> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-pill">
                <FaTwitter size={16} /> Twitter
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-pill">
                <FaYoutube size={18} /> YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Gallery Section */}
      <section className="section social-gallery" id="social-gallery">
        <div className="container-wide">
          <div className="social-gallery__grid">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="social-gallery__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } },
                }}
              >
                <div className="social-gallery__img-wrapper">
                  <img src={post.image} alt={post.alt} className="social-gallery__img" />
                  <div className="social-gallery__overlay">
                    <FaInstagram size={36} />
                  </div>
                </div>
                <div className="social-gallery__info">
                  <div className="social-gallery__meta">
                    <span className="social-gallery__likes">♥ {post.likes}</span>
                    <span className="social-gallery__handle">@deliciousjourney</span>
                  </div>
                  <p className="social-gallery__caption">{post.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="social-gallery__cta">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark social-gallery__follow-btn"
              id="social-follow-page-btn"
            >
              FOLLOW US @DELICIOUSJOURNEY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Social
