import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const container = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    // Hero Animation
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });

    // Features Animation on Scroll
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    });

    // Banner Animation
    gsap.from('.banner-content', {
      scrollTrigger: {
        trigger: '.banner-section',
        start: 'top 75%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <div className="landing-page" ref={container}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-text">Welcome to the Ultimate Store</h1>
          <p className="hero-text">Discover premium products with a seamless shopping experience built with React and Redux Toolkit.</p>
          <button className="hero-text shop-now-btn" onClick={() => navigate('/products')}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered in record time with our optimized logistics and worldwide shipping network.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure Checkout</h3>
            <p>Your data is protected with state-of-the-art encryption and robust Redux state management.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Premium Quality</h3>
            <p>We source only the best products from top brands globally to ensure your maximum satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <h2>Ready to upgrade your lifestyle?</h2>
          <p>Join thousands of happy customers today and explore our exclusive collection.</p>
          <button className="secondary-btn" onClick={() => navigate('/products')}>
            Explore Collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
