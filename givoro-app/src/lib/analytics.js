// Analytics integration stub for GIVORO website
// Add Google Analytics, Vercel Analytics, or other tracking here

export function trackEvent(event, data) {
  // Example: send event to analytics provider
  // window.gtag('event', event, data);
  // For now, this is a placeholder
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics event:', event, data);
  }
} 