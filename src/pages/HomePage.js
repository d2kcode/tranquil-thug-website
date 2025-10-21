import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [bookingUrgency, setBookingUrgency] = useState({
    viewersCount: getRealisticViewerCount(),
    bookedToday: getRealisticBookings(),
    availableSlots: Math.floor(Math.random() * 4) + 2
  });

  function getRealisticViewerCount() {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    const hour = indiaTime.getHours();
    
    if (hour >= 6 && hour < 22) {
      return Math.floor(Math.random() * 9) + 10; // 10-18
    } else {
      return Math.floor(Math.random() * 8) + 5; // 5-12
    }
  }

  function getRealisticBookings() {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    const hour = indiaTime.getHours();
    
    if (hour >= 18 && hour < 23) {
      return Math.floor(Math.random() * 3) + 2;
    } else if (hour >= 9 && hour < 18) {
      return Math.floor(Math.random() * 2) + 1;
    } else {
      return Math.floor(Math.random() * 2);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBookingUrgency({
        viewersCount: getRealisticViewerCount(),
        bookedToday: getRealisticBookings(),
        availableSlots: Math.floor(Math.random() * 4) + 2
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <div className="urgency-banner">
            🔥 {bookingUrgency.viewersCount} people viewing Haruki Villa right now
          </div>
          <h1>Welcome to Tranquil Thug</h1>
          <p className="hero-subtitle">Where Boujee Meets Cozy</p>
          <p className="hero-description">
            Experience luxury at our 5⭐ rated 3BHK farm villa in Kusur, Lonavala. 
            Made for families, friends & four paws.
          </p>
          
          <div className="booking-urgency-box">
            <div className="urgency-item">
              <span className="urgency-icon">👥</span>
              <span className="urgency-text">{bookingUrgency.bookedToday} bookings today</span>
            </div>
            <div className="urgency-item">
              <span className="urgency-icon">⏰</span>
              <span className="urgency-text">Only {bookingUrgency.availableSlots} weekend slots left</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a 
              href="https://www.airbnb.com/rooms/1275311065708744882" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large pulse-button"
            >
              🏠 BOOK HARUKI VILLA NOW
            </a>
            <Link to="/haruki-villa" className="btn btn-secondary btn-large">
              Take Virtual Tour
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <p>📸 Haruki Villa Hero Image</p>
            <p>Upload actual villa photos here</p>
          </div>
          <div className="floating-price-tag">
            <span className="price-from">From</span>
            <span className="price-amount">₹8,999</span>
            <span className="price-night">/night</span>
          </div>
        </div>
      </section>

      <section className="owner-cta-section">
        <div className="container">
          <div className="owner-cta-content">
            <div className="owner-cta-text">
              <h2>Own Property in Lonavala Region?</h2>
              <p className="cta-subtitle">Transform it into consistent ₹50,000+ monthly income</p>
              <div className="owner-benefits">
                <div className="benefit-item">✅ Complete property management - we handle everything</div>
                <div className="benefit-item">✅ Professional marketing & photography (₹25,000 value included)</div>
                <div className="benefit-item">✅ Proven 5.0★ rating system from our Haruki Villa success</div>
              </div>
            </div>
            <div className="owner-cta-action">
              <Link to="/lease-your-property" className="btn btn-primary btn-large pulse-button">
                💰 PARTNER WITH US
              </Link>
              <p className="no-commitment">Free property evaluation - No upfront costs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
