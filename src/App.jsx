import React from "react";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./components/CartList.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/products" 
          element={
            <main className="app-content">
              <h1>Redux Toolkit Series</h1>
              <p>Welcome to your shopping experience.</p>
              <Product />
            </main>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <main className="app-content">
              <CartList />
            </main>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
