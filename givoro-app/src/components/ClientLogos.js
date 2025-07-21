import React from 'react';

const logos = [
  { src: '/images/logo1.png', alt: 'Client 1' },
  { src: '/images/logo2.png', alt: 'Client 2' },
  { src: '/images/logo3.png', alt: 'Client 3' },
  { src: '/images/logo4.png', alt: 'Client 4' },
  { src: '/images/logo5.png', alt: 'Client 5' },
  { src: '/images/logo6.png', alt: 'Client 6' },
  { src: '/images/logo7.png', alt: 'Client 7' },
  { src: '/images/logo8.png', alt: 'Client 8' },
];

export default function ClientLogos() {
  return (
    <div>
      <h2 className="text-3xl font-heading text-primary mb-8">Trusted by Leading Brands</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
        {logos.map((logo, i) => (
          <div key={i} className="flex justify-center items-center h-16">
            <img
              src={logo.src}
              alt={logo.alt}
              aria-label={logo.alt}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              style={{ minHeight: 48 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 