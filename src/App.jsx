import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

// Main Pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './From/login'

// New Dedicated Footer Pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookieSettings from './pages/CookieSettings'
import GiftCards from './pages/GiftCards'
import Experiences from './pages/Experiences'

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname.toLowerCase() === '/login'

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <CartProvider>
      <div className="page-wrapper">
        <Toaster position="top-center" />
        {!isLoginPage && <Navbar />}
        <CartDrawer />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Dedicated Footer Component Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookieSettings />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
        {!isLoginPage && <Footer />}
      </div>
    </CartProvider>
  )
}

export default App
