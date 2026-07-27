import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineUser,
  HiOutlineArrowLeft,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
} from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import './login.css'

function Login() {
  const [activeTab, setActiveTab] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Login form state
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  // Sign up form state
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (!loginData.email || !loginData.password) {
      setError('Please fill in all fields')
      return
    }
    setSuccess('Welcome back! Redirecting...')
    setError('')
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (signupData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setSuccess('Account created successfully! Welcome aboard.')
    setError('')
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    setError('')
    setSuccess('')
    setShowPassword(false)
  }

  return (
    <div className="login-page" id="login-page">
      <Link to="/" className="login-back" id="login-back-btn">
        <HiOutlineArrowLeft size={18} />
        Back to Home
      </Link>

      <div className="login-container">
        {/* Header */}
        <div className="login-header">
          <div className="login-header__icon">
            <HiOutlineUser size={28} />
          </div>
          <h1 className="login-header__title">
            {activeTab === 'login' ? 'Welcome Back' : 'Join Us'}
          </h1>
          <p className="login-header__subtitle">
            {activeTab === 'login'
              ? 'Sign in to access your reservations and favorites'
              : 'Create an account to start your culinary journey'}
          </p>
        </div>

        {/* Card */}
        <div className="login-card">
          {/* Tab Switcher */}
          <div className="login-tabs" id="login-tabs">
            <button
              className={`login-tabs__btn ${activeTab === 'login' ? 'login-tabs__btn--active' : ''}`}
              onClick={() => switchTab('login')}
              id="tab-login"
            >
              Login
            </button>
            <button
              className={`login-tabs__btn ${activeTab === 'signup' ? 'login-tabs__btn--active' : ''}`}
              onClick={() => switchTab('signup')}
              id="tab-signup"
            >
              Sign Up
            </button>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="login-form__error" id="login-error">
              <HiOutlineExclamationCircle size={18} />
              {error}
            </div>
          )}
          {success && (
            <div className="login-form__success" id="login-success">
              <HiOutlineCheckCircle size={18} />
              {success}
            </div>
          )}

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLoginSubmit} id="login-form">
              <div className="login-form__group">
                <label className="login-form__label" htmlFor="login-email">
                  Email Address
                </label>
                <div className="login-form__input-wrapper">
                  <span className="login-form__input-icon">
                    <HiOutlineMail size={18} />
                  </span>
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    className="login-form__input"
                    placeholder="your@email.com"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-form__group">
                <label className="login-form__label" htmlFor="login-password">
                  Password
                </label>
                <div className="login-form__input-wrapper">
                  <span className="login-form__input-icon">
                    <HiOutlineLockClosed size={18} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    name="password"
                    className="login-form__input"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="login-form__toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
                  </button>
                </div>
              </div>

              <div className="login-form__options">
                <label className="login-form__remember">
                  <input type="checkbox" id="remember-me" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="login-form__forgot" id="forgot-password-btn">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="login-form__submit" id="login-submit-btn">
                Sign In
              </button>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSignupSubmit} id="signup-form">
              <div className="login-form__group">
                <label className="login-form__label" htmlFor="signup-name">
                  Full Name
                </label>
                <div className="login-form__input-wrapper">
                  <span className="login-form__input-icon">
                    <HiOutlineUser size={18} />
                  </span>
                  <input
                    type="text"
                    id="signup-name"
                    name="name"
                    className="login-form__input"
                    placeholder="John Doe"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="login-form__group">
                <label className="login-form__label" htmlFor="signup-email">
                  Email Address
                </label>
                <div className="login-form__input-wrapper">
                  <span className="login-form__input-icon">
                    <HiOutlineMail size={18} />
                  </span>
                  <input
                    type="email"
                    id="signup-email"
                    name="email"
                    className="login-form__input"
                    placeholder="your@email.com"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-form__group">
                <label className="login-form__label" htmlFor="signup-password">
                  Password
                </label>
                <div className="login-form__input-wrapper">
                  <span className="login-form__input-icon">
                    <HiOutlineLockClosed size={18} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signup-password"
                    name="password"
                    className="login-form__input"
                    placeholder="At least 6 characters"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="login-form__toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
                  </button>
                </div>
              </div>

              <div className="login-form__group">
                <label className="login-form__label" htmlFor="signup-confirm-password">
                  Confirm Password
                </label>
                <div className="login-form__input-wrapper">
                  <span className="login-form__input-icon">
                    <HiOutlineLockClosed size={18} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signup-confirm-password"
                    name="confirmPassword"
                    className="login-form__input"
                    placeholder="Confirm your password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <button type="submit" className="login-form__submit" id="signup-submit-btn" style={{ marginTop: '0.5rem' }}>
                Create Account
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="login-divider">
            <span className="login-divider__line"></span>
            <span className="login-divider__text">or continue with</span>
            <span className="login-divider__line"></span>
          </div>

          {/* Social Login */}
          <div className="login-social">
            <button className="login-social__btn" id="social-google" type="button">
              <FcGoogle size={20} />
              Google
            </button>
            <button className="login-social__btn" id="social-apple" type="button">
              <FaApple size={20} />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
