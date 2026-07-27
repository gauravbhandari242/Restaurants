import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineShoppingBag, HiOutlineX, HiPlus, HiMinus } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { useCart } from '../context/CartContext'
import './CartDrawer.css'

function CartDrawer() {
  const { cart, cartCount, cartTotal, isCartOpen, setIsCartOpen, updateCartQty, removeFromCart, clearCart } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            id="cart-drawer"
          >
            <div className="cart-drawer__header">
              <h2 className="cart-drawer__title">
                Your Cart
                <span className="cart-drawer__count">({cartCount})</span>
              </h2>
              <button
                className="cart-drawer__close"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
              >
                <HiOutlineX size={22} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-drawer__empty">
                <HiOutlineShoppingBag size={48} />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="cart-drawer__items">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      className="cart-item"
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item__img"
                      />
                      <div className="cart-item__info">
                        <h4 className="cart-item__name">{item.name}</h4>
                        <p className="cart-item__price">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <div className="cart-item__controls">
                          <div className="qty-selector qty-selector--sm">
                            <button
                              onClick={() => updateCartQty(item.id, -1)}
                              className="qty-btn"
                            >
                              <HiMinus size={12} />
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQty(item.id, 1)}
                              className="qty-btn"
                            >
                              <HiPlus size={12} />
                            </button>
                          </div>
                          <button
                            className="cart-item__remove"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="cart-drawer__footer">
                  <div className="cart-drawer__subtotal">
                    <span>Subtotal</span>
                    <span className="cart-drawer__total-price">
                      ₹{cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="btn btn-dark cart-drawer__checkout"
                    onClick={() => {
                      toast.success('Order placed successfully!', {
                        style: {
                          background: '#1a1a1a',
                          color: '#fff',
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                        },
                        iconTheme: { primary: '#4ade80', secondary: '#fff' },
                      })
                      clearCart()
                      setIsCartOpen(false)
                    }}
                    id="checkout-btn"
                  >
                    Checkout
                  </button>
                  <p className="cart-drawer__note">Taxes calculated at checkout</p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
