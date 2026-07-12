import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="brand">Redux Cart</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;