import React, { createContext, useContext, useState, useCallback } from 'react'
import toast from 'react-hot-toast'

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((item, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id)
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + qty } : c
        )
      }
      return [...prev, { ...item, quantity: qty }]
    })
    toast.success(`${qty}× ${item.name} added to cart`, {
      style: {
        background: '#1a1a1a',
        color: '#fff',
        borderRadius: '50px',
        fontSize: '0.85rem',
        padding: '0.6rem 1.5rem',
      },
      iconTheme: { primary: '#4ade80', secondary: '#fff' },
    })
  }, [])

  const updateCartQty = useCallback((id, delta) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id ? { ...c, quantity: Math.max(0, c.quantity + delta) } : c
        )
        .filter((c) => c.quantity > 0)
    )
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.quantity, 0)
  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0)

  const value = {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateCartQty,
    removeFromCart,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
