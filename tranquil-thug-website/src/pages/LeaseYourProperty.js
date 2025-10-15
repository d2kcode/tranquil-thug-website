import React, { useState, useEffect } from 'react';
import './LeaseYourProperty.css';

const LeaseYourProperty = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    propertyLocation: '',
    propertyType: '',
    bedrooms: '',
    description: ''
  });

  const [timeLeft, setTimeLeft] = useState(23 * 60 + 47);
  const [viewersCount, setViewersCount] = useState(getRealisticViewerCount());
  const [spotsLeft, setSpotsLeft] = useState(Math.floor(Math.random() * 4) + 2);

  function getRealisticViewerCount() {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    const hour = indiaTime.getHours();
    
    if (hour >= 6 && hour < 22) {
      return Math.floor(Math.random() * 9) + 12;
    } else {
      return Math.floor(Math.random() * 8) + 5;
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) return 23 * 60 + 47;
        return prevTime - 1;
      });
    }, 1000);

    const updateTimer = setInterval(() => {
      setViewersCount(getRealisticViewerCount());
      if (Math.random() < 0.1) {
        setSpotsLeft(Math.floor(Math.random() * 4) + 2);
      }
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(updateTimer);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 APPLICATION RECEIVED! Our team will contact you within 2 hours.');
    // Track form submission
    if (window.gtag) {
      window.gtag('event', 'lease_form_submit', {event_category: 'conversion'});
    }
  };

  return (
    <div className="lease-your-property">
      <div className="urgent-alert-banner">
        <div className="container">
          <div className="alert-content">
            <span className="alert-icon">🚨</span>
            <span className="alert-text">
              LIMITED PARTNERSHIPS: Only {spotsLeft} management slots available this month
            </span>
            <span className="alert-timer">Applications close in {formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <section className="lease-hero">
        <div className="container">
          <div className="urgency-indicators">
            <div className="live-indicator">
              🔴 LIVE: {viewersCount} property owners viewing this page
            </div>
          </div>
          
          <h1>Turn Your Vacant Property Into ₹50,000+/Month</h1>
          <p className="hero-subtitle">
            <span className="highlight">PROVEN RESULTS</span> - Join Maharashtra's fastest-growing vacation rental network
          </p>
          
          <div className="real-social-proof">
            <div className="proof-item">
              <div className="proof-stat">5.0⭐</div>
              <div className="proof-text">Airbnb Rating<br/><small>Our Haruki Villa</small></div>
            </div>
            <div className="proof-item">
              <div className="proof-stat">85%</div>
              <div className="proof-text">Occupancy Rate<br/><small>vs 65% Industry Avg</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="application-form-section">
        <div className="container">
          <div className="form-header">
            <h2>🎯 Secure Your Property Management Partnership</h2>
            <p className="form-subtitle">
              Only {spotsLeft} partnership slots available this month!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lease-form">
            <div className="form-section">
              <h3>Property Owner Information</h3>
              <div className="form-group">
                <label htmlFor="ownerName">Full Name *</label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Property Details</h3>
              <div className="form-group">
                <label htmlFor="propertyLocation">Property Location *</label>
                <select
                  id="propertyLocation"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={(e) => setFormData({...formData, propertyLocation: e.target.value})}
                  required
                >
                  <option value="">Select location</option>
                  <option value="Kusur">Kusur - Premium market (₹50K+ monthly)</option>
                  <option value="Lonavala">Lonavala - High demand (₹55K+ monthly)</option>
                  <option value="Kamshet">Kamshet - Adventure hub (₹45K+ monthly)</option>
                  <option value="Karjat">Karjat - Hill station (₹40K+ monthly)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Property Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows="4"
                  placeholder="Describe your property, unique features, location advantages..."
                />
              </div>
            </div>

            <div className="form-submit">
              <div className="submit-urgency">
                <p className="urgency-text">🔥 Only {spotsLeft} slots remaining!</p>
                <p className="timer-text">Time left: {formatTime(timeLeft)}</p>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large pulse-button">
                🚀 SUBMIT FOR EVALUATION
              </button>
              
              <div className="submit-guarantees">
                <p>✅ Evaluation within 24 hours<br/>
                ✅ Consultation call within 2 hours<br/>
                ✅ FREE professional photography</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LeaseYourProperty;
