// Enhanced tracking functions for Tranquil Thug

export function trackBookingClick(source = 'homepage') {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'booking_click', {
      'event_category': 'engagement',
      'event_label': source,
      'value': 8999
    });
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Villa Booking',
      content_category: 'Accommodation',
      value: 8999,
      currency: 'INR'
    });
  }
  
  // Microsoft Clarity
  if (window.clarity) {
    window.clarity('event', 'booking_click', { source: source });
  }
}

export function trackLeaseFormSubmit(data = {}) {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'lease_form_submit', {
      'event_category': 'conversion',
      'event_label': 'property_partnership',
      'value': 50000
    });
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Property Lease Application',
      value: 50000,
      currency: 'INR'
    });
  }
  
  // Microsoft Clarity
  if (window.clarity) {
    window.clarity('event', 'lease_form_submit', data);
  }
}
