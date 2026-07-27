import React from 'react'
import { motion } from 'framer-motion'
import aboutImg from '../assets/images/about.png'
import './About.css'

function About() {
  return (
    <div className="about-page" id="about-page">
      <section className="section">
        <div className="container">
          <motion.div
            className="about-page__hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="about-page__title">
              Culinary Expertise Rooted in Tradition
            </h1>
            <p className="about-page__subtitle">
              Our team applies culinary expertise to transform locally sourced produce into balanced, contemporary dishes that honor regional traditions.
            </p>
          </motion.div>

          <motion.div
            className="about-page__image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={aboutImg} alt="Restaurant dining room" />
          </motion.div>

          <motion.div
            className="about-page__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Meticulous sourcing policies demonstrate commitment to traceable supply chains, while disciplined kitchen protocols facilitate consistent flavor profiles throughout each service. The dining room team implements refined hospitality standards to optimize guest comfort and privacy, creating an environment conducive to meaningful conversation.
            </p>
            <p>
              By integrating comprehensive sustainability solutions, the restaurant minimizes waste and supports agricultural partners, thereby reinforcing its role as a responsible community stakeholder.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
