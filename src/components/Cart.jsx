import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const cartSelector = useSelector((state) => state.cart.items);
  return (
    <Link to="/cart" className="cart-badge" aria-label="Shopping cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
      </Link>
  )
}

export default Cart;